from flask import Flask, request
from flask_restful import Api

import SheetService

app = Flask(__name__)
api = Api(app)
sheet_service = SheetService.SheetService()


@app.route("/admin")
def hello_world():
    return "<p>Hello, World!</p>"


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
