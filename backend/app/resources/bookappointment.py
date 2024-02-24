from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import BookAppointments
from app.schemas.bookappointment import BookappointmentSchema

bookappointment_schema = BookappointmentSchema()
bookappointment_list_schema = BookappointmentSchema(many=True)

class BookappointmentResource(Resource):
    @classmethod
    def post(cls):
        bookappointment = bookappointment_schema.load(request.get_json())
        
        BookAppointments.save_to_db(bookappointment)

        return {"message": "Appointment Submitted successfully."}, 201
    

class BookappointmentUpdateResource(Resource):
    @classmethod
    def put(cls, _id: int):
        bookappointment_json = request.get_json()

        bookappointment = BookAppointments.find_by_id(_id)


        if bookappointment:
            bookappointment.fullName = bookappointment_json["fullName"]
            bookappointment.phoneNumber = bookappointment_json["phoneNumber"]
            bookappointment.email = bookappointment_json["email"]
            bookappointment.service = bookappointment_json["service"]
            bookappointment.appointmentDate = bookappointment_json["appointmentDate"]
            bookappointment.description = bookappointment_json["description"]
            bookappointment.preferredAttorney = bookappointment_json["preferredAttorney"]
            bookappointment.preferredLawfirm = bookappointment_json["preferredLawfirm"]
            bookappointment.communicationPreferences = bookappointment_json["communicationPreferences"]
            bookappointment.appointmentTime = bookappointment_json["appointmentTime"]
            bookappointment.save_to_db()
        else:
            return {"message": "Appointment not found"}, 404

        return bookappointment_schema.dump(bookappointment), 200
    

class GetAllBookAppointmentResource(Resource):
    @classmethod
    def get(cls):
        bookappointment = BookAppointments.query.all()
        return bookappointment_list_schema.dump(bookappointment), 200
    
class BookappointmentByUserResource(Resource):
    @classmethod
    def get(cls, user_id: int):

        # bookappointment = BookAppointments.find_by_userid(user_id)

        user_appointment = BookAppointments.query.filter_by(user_id=user_id).all()
        
        if not user_appointment:
            return {"message": "no appointment found."}, 404
        return bookappointment_list_schema.dump(user_appointment), 200
    
class DeleteBookappointmentResource(Resource):
    @classmethod
    def delete(cls, _ID: int):
        bookappointment = BookAppointments.find_by_id(_ID)
        if bookappointment:
            bookappointment.delete_from_db()
            return {"message": "appointment deleted."}
        return {"message": "appointment not found."}, 404


class AttorneyAppointmentsResource(Resource):
    @classmethod
    def get(cls, attorney_id):
        attorney_appointments = BookAppointments.query.filter_by(preferredAttorney=attorney_id).all()
        serialized_appointments = bookappointment_schema.dump(attorney_appointments)
        return {"appointments": serialized_appointments}, 200

class LawfirmAppointmentsResource(Resource):
    @classmethod
    def get(cls, lawfirm_id):
        lawfirm_appointments = BookAppointments.query.filter_by(preferredLawfirm=lawfirm_id).all()
        serialized_appointments = bookappointment_schema.dump(lawfirm_appointments)
        return {"appointments": serialized_appointments}, 200



