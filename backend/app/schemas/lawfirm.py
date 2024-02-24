from app import ma
from app.models import Lawfirms

class LawfirmSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Lawfirms
        load_only = ("password",)
        dumb_only = ("id",)
        include_fk = True
        load_instance = True