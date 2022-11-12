from flask import render_template, redirect, request, session
from flask_app.models.post import Post
from flask_app import app

@app.route("/")
def homepage():
    
    return render_template ("/homepage.html")