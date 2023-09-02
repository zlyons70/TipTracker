'''This module is used to run the project'''
from BackEnd import create_app
from BackEnd.models import User

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
User.register()
User.login()