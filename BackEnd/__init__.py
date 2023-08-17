'''Creates the flask server'''
import os
import tomllib
from flask import Flask

print(__file__)
with open(os.path.join(os.path.dirname(__file__),"config.toml"), "rb") as file:
    config = tomllib.load(file)

def create_app():
    '''initializes the flask application'''
    app = Flask(__name__)
    app.config['SECRET_KEY'] = config['key']

    from .views import views
    from .auth import auth
    # here we are registering the blueprints with flask
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    return app
