from app import ma
from app.models import BookAppointments

class BookappointmentSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = BookAppointments
        load_only = ("password",)
        dumb_only = ("id",)
        include_fk = True
        load_instance = True