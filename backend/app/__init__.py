from flask import Flask
from werkzeug.utils import secure_filename
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_restful import Api
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_uploads import UploadSet, IMAGES, configure_uploads
from app.libs.image_helper import IMAGE_SET
from config import Config
import logging

app = Flask(__name__)
app.logger.setLevel(logging.DEBUG)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}
app.config.from_object(Config)
api = Api(app)
jwt = JWTManager(app)
db = SQLAlchemy(app)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

from app.models import *

admin = Admin(app)
admin.add_view(ModelView(Users, db.session))
admin.add_view(ModelView(Lawfirms, db.session))
admin.add_view(ModelView(Lawyers, db.session))
admin.add_view(ModelView(BookAppointments, db.session))


migrate = Migrate(app, db)
ma = Marshmallow(app)
CORS(app)
configure_uploads(app, IMAGE_SET)

from app import routes


