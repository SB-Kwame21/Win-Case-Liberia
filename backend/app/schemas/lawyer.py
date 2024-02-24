from app import ma
from app.models import Lawyers

class LawyerSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Lawyers
        load_only = ("password",)
        dumb_only = ("id",)
        include_fk = True
        load_instance = True