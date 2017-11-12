from flask import Flask
from flask_session import Session

from timelineage import config

app = Flask(__name__)
SESSION_TYPE = 'redis'
SESSION_COOKIE_NAME = 'tl_session'
app.config.from_object(__name__)
Session(app)

from timelineage.webapp import views

