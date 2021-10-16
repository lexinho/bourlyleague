import flask
from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS

import SheetService

app = Flask(__name__)
api = Api(app)
CORS(app)
sheet_service = SheetService.SheetService()


@app.route("/increment/<row>/<col>")
def hello_world(row, col):
    sheet_service.increment_cell(row, col)
    incremented_value = sheet_service.get_cell_value(row, col)
    response = flask.make_response()
    # response.headers['Access-Control-Allow-Origin'] = '*'
    return "Row {} Col {} value is now {}".format(row, col, incremented_value)


@app.route("/update")
def update():
    sheet_service.increment_cell(57, 4)
    return "OK"


@app.route("/kill")
def kill():
    # args = request.args
    # print(args)
    killed = "Toto"
    # print(killed)
    sheet_service.update_killed(64, 4, killed)
    return "OK"
