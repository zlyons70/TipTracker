'''This module is used to run the project'''
from BackEnd import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
