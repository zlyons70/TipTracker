'''Creates the flask server'''
import os
import pprint
from dotenv import load_dotenv, find_dotenv
from flask import Flask
from flask_pymongo import PyMongo


load_dotenv(find_dotenv())
mongo_key = os.environ.get('MONGODB_PWD')
connection_string = f"""mongodb+srv://zlyons70:{mongo_key}@tiptrackertest.idxtxp0.mongodb.net/"""

def create_app():
    '''initializes the flask application'''
    app = Flask(__name__)
    secret_key = os.environ.get('key')
    app.config['SECRET_KEY'] = secret_key
    app.config['MONGO_URI'] = connection_string
    mongo = PyMongo(app)
    db = mongo.db
    # make a mongo client
    client = mongo.cx
    # list the databases
    db_list = client.list_database_names()
    print(db_list)
    test_db = client.test
    collections = test_db.list_collection_names()
    collection = test_db['test']
    test_document = {'name': 'test',
                     'value': 'test'}
    inserted_id = collection.insert_one(test_document).inserted_id
 
    production = client.production
    person_collection = production.person_collection
    first_names = ['Zach', 'Chris', 'Mario']
    last_names = ['Lyons', 'Hinkle', 'Filice']
    ages = [24, 24, 26]
    docs = []

    for first_name, last_name, age in zip(first_names, last_names, ages):
        doc = {"first_name": first_name, "last_name": last_name, "age": age}
		# person_collection.instert_one(doc) todo one at a time
        docs.append(doc)
    person_collection.insert_many(docs)
    #.find allows you to insert a query object
    people = person_collection.find()
    for person in people:
        pprint.pprint(person)
    from .views import views
    from .auth import auth
    # here we are registering the blueprints with flask
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    return app
