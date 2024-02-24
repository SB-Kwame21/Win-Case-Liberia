from app import ma
from app.models import Users

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Users
        load_only = ("password")
        dump_only = ("id",)
        include_fk = True
        load_instance = True


