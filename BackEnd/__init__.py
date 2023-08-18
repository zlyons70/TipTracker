'''Creates the flask server'''
import os
import pprint
from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv
from flask import Flask
load_dotenv(find_dotenv())
mongo_key = os.environ.get('MONGO_KEY')
connection_string = f"""mongodb+srv://zlyons70:{mongo_key}@tiptrackertest.idxtxp0.mongodb.net/"""
def create_app():
    '''initializes the flask application'''
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 

    from .views import views
    from .auth import auth
    # here we are registering the blueprints with flask
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    return app
