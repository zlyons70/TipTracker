'''Store the routes to the pages of the app'''
from flask import Blueprint

# Blueprints are used to organize the routes of the app
views = Blueprint('views', __name__)

@views.route('/')
def home():
    '''This function runs whenever we goto the home page'''
    return "<h1>Test</h1>"