# from flask import Flask, send_from_directory
# from flask_restful import Api
# from flask_cors import CORS

# import SheetService

# app = Flask(__name__ 
#     ,static_folder='frontend/build',static_url_path='')
# cors = CORS(app)
# api = Api(app)
# sheet_service = SheetService.SheetService()


# @app.route("/increment/<row>/<col>")
# def increment(row, col):
#     sheet_service.increment_cell(row, col)
#     incremented_value = sheet_service.get_cell_value(row, col)
#     return "Row {} Col {} value is now {}".format(row, col, incremented_value)


# @app.route("/update/<row>/<col>/<count>")
# def update(row, col, count):
#     sheet_service.update_cell(row, col, count)
#     incremented_value = sheet_service.get_cell_value(row, col)
#     return "Row {} Col {} value is now {}".format(row, col, incremented_value)


# @app.route("/kill/<row>/<col>/<killed>")
# def kill(row, col, killed):
#     sheet_service.update_killed(row, col, killed)
#     all_killed = sheet_service.get_cell_value(row, col)
#     return "Row {} Col {} value is now {}".format(row, col, all_killed)

# @app.route('/')
# def serve():
#     return send_from_directory(app.static_folder, 'index.html')