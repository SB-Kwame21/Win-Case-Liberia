from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import Lawfirms
from app.schemas.lawfirm import LawfirmSchema

lawfirm_schema = LawfirmSchema()
lawfirms_schema = LawfirmSchema()

class CreateLawfirmResource(Resource):
    @classmethod
    def post(cls):
        lawfirms = lawfirm_schema.load(request.get_json())
        
        Lawfirms.save_to_db(lawfirms)

        return {"message" : " Created successful."}, 201
   

# class GetAllLawfirmResource(Resource):
#     @classmethod
#     def get(cls):
#         lawfirm = Lawfirms.query.all()
#         results = lawfirms_schema.dump(lawfirm)
#         return {"lawfirms": results}
    
class GetAllLawfirmResource(Resource):
    @classmethod
    def get(cls):
        lawfirm = Lawfirms.query.all()
        return lawfirm_schema.dump(lawfirm, many=True)
    


class UserLawfirmResource(Resource):
    @classmethod
    @jwt_required() 
    def get(cls):

        user_id = get_jwt_identity()

        user_lawfirms = Lawfirms.query.filter_by(user_id=user_id).all()
        serialized_lawfirms =  lawfirms_schema.dump(user_lawfirms)

        return {"Lawfirm": serialized_lawfirms}, 200
    



class LawfirmUpdateResource(Resource):
    @classmethod
    def put(cls, lawfirm_id: int):
        lawfirm_data = lawfirm_schema.load(request.get_json)

        lawfirm = Lawfirms.find_by_id(lawfirm_id)
    
        if  lawfirm:
              lawfirm.lawfirmName = lawfirm_data.lawfirmName
              lawfirm.businessAddress = lawfirm_data.businessAddress
              lawfirm.city = lawfirm_data.city
              lawfirm.country = lawfirm_data.country
              lawfirm.phone = lawfirm_data.phone
              lawfirm.email = lawfirm_data.email
              lawfirm.website = lawfirm_data.website
              lawfirm.practiceArea = lawfirm_data.practiceArea          
              lawfirm.barAssociationsMembership = lawfirm_data.barAssociationsMembership
              lawfirm.language = lawfirm_data.language
              lawfirm.description = lawfirm_data.description
              lawfirm.logoImage = lawfirm_data.logoImage

             

              lawfirm.save_to_db()
          
        else:
            return{"message": "Lawfirm not Found"}
        return lawfirm_schema.dump(lawfirm), 200



class LawfirmDeleteResource(Resource):
    @classmethod
    def delete(cls, lawfirm_id: int):
        lawfirm = Lawfirms.find_by_id(lawfirm_id)

        if not lawfirm:
            return {"message": "lawfirm not found"}
        lawfirm.delete_from_db()
        return {"message": "lawfirm deleted seccessfully"}, 200



