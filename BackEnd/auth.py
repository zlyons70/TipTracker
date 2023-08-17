'''Store the authentication urls login, logout, sign up, etc.'''
from flask import Blueprint, request, flash

# Blueprints are used to organize the routes of the app
auth = Blueprint('auth', __name__)

# GET is used to get data from the server
# POST is used to send data to the server
# PUT is used to update data in the server
# DELETE is used to delete data from the server

@auth.route('/login', methods=['GET', 'POST'])
def login():
    '''This function runs whenever we goto the login page'''
    return "<h1>Login</h1>"

@auth.route('/logout', methods=['GET', 'POST'])
def logout():
    '''This function runs whenever we goto the logout page'''
    return "<h1>Logout</h1>"

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    '''This function runs whenever we goto the sign up page'''
    if request.method == 'POST':
        # gets the data from the form
        email = request.form.get('email')
        user_name = request.form.get('UserName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        if len(email) < 4:
            flash('email invalid', category='error')
        elif len(user_name) < 2:
            flash('user name invalid', category='error')
        elif password1 != password2:
            flash('passwords do not match', category='error')
        elif len(password1) < 7:
            flash('password must be at least 7 characters', category='error')
        else:
            # add user to database
            pass
    return "<h1>Sign Up</h1>"
