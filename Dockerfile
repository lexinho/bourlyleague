# ------------------------------ Build frontend ------------------------------ #

FROM node:14-alpine AS frontend-builder

ENV REACT_APP_API_URL "https://bourlyleague.herokuapp.com/"

ENV PUBLIC_URL "https://bourlyleague.herokuapp.com/"

RUN \
    # Install yarn
    apk add --no-cache --virtual .build-deps \
    ca-certificates \
    wget \
    tar && \
    cd /usr/local/bin && \
    wget https://yarnpkg.com/latest.tar.gz && \
    tar zvxf latest.tar.gz && \
    ln -s /usr/local/bin/dist/bin/yarn.js /usr/local/bin/yarn.js && \
    apk del .build-deps

COPY ./frontend /frontend
WORKDIR /frontend

# Build
RUN yarn install && \
    yarn build

# ----------------------------- Run application ---------------------------- #

FROM alpine:latest

# Install python / pip
RUN apk add python3 && \
    apk add py-pip

# Copy application files
COPY ./backend /bourlyleague/backend
COPY --from=frontend-builder /frontend/build /bourlyleague/frontend/build

# Install backend packages
WORKDIR /bourlyleague/backend

RUN pip3 install -r requirements.txt

# Start application
WORKDIR /bourlyleague/backend

ENV PYTHONPATH "${PYTHONPATH}:/bourlyleague"

ENTRYPOINT ["python3"]
CMD ["main.py"]