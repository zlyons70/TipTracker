'''Creates the flask server'''
import os
import pprint
from dotenv import load_dotenv, find_dotenv
from flask import Flask
from flask_pymongo import PyMongo
#from .models import User


load_dotenv(find_dotenv())
mongo_key = os.environ.get('MONGODB_PWD')
connection_string = f"""mongodb+srv://zlyons70:{mongo_key}@tiptrackertest.idxtxp0.mongodb.net/&authSource=admin"""
mongo = PyMongo()
DB_NAME = "testing.db"

def create_app():
    '''initializes the flask application'''
    app = Flask(__name__)
    secret_key = os.environ.get('key')
    app.config['SECRET_KEY'] = secret_key
    app.config['MONGO_URI'] = connection_string
    mongo.init_app(app)
    from .views import views
    from .auth import auth
    # here we are registering the blueprints with flask
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    #user.register()
    return app