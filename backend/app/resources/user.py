from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from marshmallow import ValidationError
from flask_restful import Resource
from app.models import Users
from app.schemas.user import UserSchema

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class UserRegister(Resource):
    @classmethod
    def post(cls):
        user = user_schema.load(request.get_json())

        if user.find_by_username(user.username):
            return {"message" : "A user with that username already exists."}, 400
        
        if user.find_by_email(user.email):
            return {"message" : "A user with that email already exists."}, 400
        
        user.set_password(user.password)
        user.save_to_db()

        return user_schema.dump(user), 200


class UserLogin(Resource):
    @classmethod
    def post(cls):
        user_data = user_schema.load(request.get_json())

        user = Users.find_by_username(user_data.username)

        if user and user.check_password(user_data.password):
            access_token = create_access_token(identity=user.id, fresh=True)
            refresh_token = create_refresh_token(user.id)

            return{
                "access_token": access_token,
                "refresh_token": refresh_token,
                "email": user.email,
                "username": user.username,
                "id": user.id
            },200
        return {"message": "Invalid credentials"}, 401

        
class UserDetailsResource(Resource):
    @classmethod
    def get(cls, user_id: int):
        user = Users.find_by_id(user_id)
        if not user:
            return{"message": "user not found"}, 404
        return user_schema.dump(user), 200
    
class GetAllUserResource(Resource):
    @classmethod
    def get(cls):

        users = Users.query.all()

        results = users_schema.dump(users)
        return {'users': results}, 200

    
class UserPasswordUpdateResource(Resource):
    @classmethod
    def put(cls):
        user_data = user_schema.load(request.get_json())

        user = Users.find_by_email(user_data.email)

        if user:
            user.set_password(user_data.password)
            user.save_to_db()
        else:
            return {"message": "user not found"}, 404
        return user_schema.dump(user), 200

    
class UserDeleteResource(Resource):
    @classmethod
    def delete(cls, user_id: int):
        user = Users.find_by_id(user_id)

        if not user:
            return {"message": "user not found"}
        user.delete_from_db()
        return {"message": "user deleted seccessfuly"}, 200
    


class UserProfileUpdateResource(Resource):
    @jwt_required()  # Require JWT authentication to access this endpoint
    def put(self):
        current_user_id = get_jwt_identity()  # Get the ID of the current user from the JWT token

        # Load the updated user data from the request
        updated_user_data = user_schema.load(request.get_json())

        # Find the current user by ID
        current_user = Users.find_by_id(current_user_id)

        if not current_user:
            return {"message": "User not found"}, 404

        # Update user information
        current_user.username = updated_user_data.get('username', current_user.username)
        current_user.email = updated_user_data.get('email', current_user.email)
        current_user.phone = updated_user_data.get('phone', current_user.phone)

        # Set new password if provided
        # new_password = updated_user_data.get('password')
        # if new_password:
        #     current_user.set_password(new_password)

        # Save changes to the database
        current_user.save_to_db()

        # Return updated user data
        return user_schema.dump(current_user), 200

    
    

        

