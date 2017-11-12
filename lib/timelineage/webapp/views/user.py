from timelineage.webapp import app
from flask import render_template, jsonify, g

@app.route('/user/')
@app.route('/user')
def user_index():
    return "user page works"