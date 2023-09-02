'''This module will be used to store different models for the database'''
from BackEnd import mongo
from flask import session
from flask_login import UserMixin
from bcrypt import hashpw, checkpw, gensalt

class User(UserMixin):
    def register():
        username = "zlyons70"
        password = "password"
        db = mongo.db
        user_collection = db['users']
        db_list = db.list_collection_names()
        print(db_list)
        hashed_password = hashpw(password.encode('utf-8'), gensalt())
        
        existing_user = mongo.db.users.find_one({'username': username})
        if existing_user:
            print("User already exists")
            return
        
        user_collection.insert_one({'username': username, 'password': hashed_password})
        print("User created")
        return
    
    def login():
        username = "zlyons70"
        password = "2"
        db = mongo.db
        user_collection = db['users']
        if username is None or password is None:
            print("Username or password is empty")
            return
        user = user_collection.find_one({'username': username})
        if username == user['username'] and checkpw(password.encode('utf-8'), user['password']):
            print(password.encode('utf-8'))
            print("User logged in")
            return
        else:
            print("Username or password is incorrect")
            return
        