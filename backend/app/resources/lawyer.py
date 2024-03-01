from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import Lawyers
from app.schemas.lawyer import LawyerSchema

lawyer_schema = LawyerSchema()
lawyers_schema = LawyerSchema(many=True)

class CreateLawyerResource(Resource):
    @classmethod
    def post(cls):
        lawyers = lawyer_schema.load(request.get_json())
        
        Lawyers.save_to_db(lawyers)

        return {"message" : " Created successful."}, 201
   


    
class GetAllLawyerResource(Resource):
    @classmethod
    def get(cls):
        lawyer = Lawyers.query.all()
        return lawyers_schema.dump(lawyer), 200
    

# class UserLawyerResource(Resource):
#     @classmethod
#     def get(cls, user_id:int):

#         user_lawyers = Lawyers.query.filter_by(user_id=user_id).all()
#         serialized_lawyers =  lawyer_schema.dump(user_lawyers)

#         return {"Lawyer": serialized_lawyers}, 200
    

class UserLawyerResource(Resource):
    @classmethod
    def get(cls, user_id: int):
        lawyer = Lawyers.query.filter_by(user_id=user_id).first()

        if lawyer:
            serialized_lawyer = lawyer_schema.dump(lawyer)
            return {"Lawyer": serialized_lawyer}, 200
        else:
            return {"message": "Lawyer not found for the specified user ID"}, 404


class LawyerUpdateResource(Resource):
    @classmethod
    def put(cls, lawyer_id: int):
        lawyer_data = lawyer_schema.load(request.get_json)

        lawyer = Lawyers.find_by_id(lawyer_id)
    
        if  lawyer:
              lawyer.fullname = lawyer_data.fullname
              lawyer.gender = lawyer_data.gender
              lawyer.address = lawyer_data.address
              lawyer.city = lawyer_data.city
              lawyer.country = lawyer_data.country
              lawyer.phone = lawyer_data.phone
              lawyer.email = lawyer_data.email
              lawyer.linkedIn = lawyer_data.linkedIn
              lawyer.website = lawyer_data.website
              lawyer.education = lawyer_data.education
              lawyer.barLicenseNumber = lawyer_data.barLicenseNumber
              lawyer.practiceArea = lawyer_data.practiceArea
              lawyer.language = lawyer_data.language
              lawyer.price = lawyer_data.price
              lawyer.image = lawyer_data.image

              lawyer.save_to_db()
          
        else:
            return{"message": "Lawyer not Found"}
        return lawyer_schema.dump(lawyer), 200



class LawyerDeleteResource(Resource):
    @classmethod
    def delete(cls, lawyer_id: int):
        lawyer = Lawyers.find_by_id(lawyer_id)

        if not lawyer:
            return {"message": "lawyer not found"}
        lawyer.delete_from_db()
        return {"message": "lawyer deleted seccessfully"}, 200



