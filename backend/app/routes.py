from flask import jsonify, request
from marshmallow import ValidationError

from app import app, jwt, api


from app.resources.user import (
    UserRegister, 
    UserLogin,  
    UserDetailsResource,
    GetAllUserResource, 
    UserPasswordUpdateResource, 
    UserDeleteResource,
    UserProfileUpdateResource
    
)

from app.resources.lawyer import (
    CreateLawyerResource,
    GetAllLawyerResource,
    UserLawyerResource,
    LawyerUpdateResource, 
    LawyerDeleteResource, 
  
)

from app.resources.bookappointment import (
    BookAppointmentResource,
    GetAllBookAppointmentResource,
    LawyerAppointmentsResource,
    LawfirmAppointmentsResource,
    BookappointmentByUserResource,
    # BookappointmentResource,  
    # BookappointmentUpdateResource, 
    # DeleteBookappointmentResource,
       
)

from app.resources.lawfirm import (
    CreateLawfirmResource,
    GetAllLawfirmResource,
    UserLawfirmResource,
    LawfirmUpdateResource,
    LawfirmDeleteResource,
)

api.add_resource(UserRegister, "/register")
api.add_resource(UserLogin, "/login")
api.add_resource(UserDetailsResource, "/user-details/<int:user_id>")
api.add_resource(GetAllUserResource, "/all-users")
api.add_resource(UserPasswordUpdateResource, "/update-password")
api.add_resource(UserDeleteResource, "/user-delete/<int:user_id>")
api.add_resource(UserProfileUpdateResource, '/update-profile')


api.add_resource(CreateLawyerResource, "/create-lawyer")
api.add_resource(GetAllLawyerResource, "/all-lawyers")
api.add_resource(UserLawyerResource, "/user-lawyer/<int:user_id>")
api.add_resource(LawyerUpdateResource, "/update-lawyer/<int:lawyer_id>")
api.add_resource(LawyerDeleteResource, "/detele-lawyer/<int:lawyer_id>")

api.add_resource(CreateLawfirmResource, "/create-lawfirm")
api.add_resource(GetAllLawfirmResource, "/all-lawfirms")
api.add_resource(UserLawfirmResource, "/user-lawfirm/<int:user_id>")
api.add_resource(LawfirmUpdateResource, "/update-lawfirm/<int:lawfirm_id>")
api.add_resource(LawfirmDeleteResource, "/detele-lawfirm/<int:lawfirm_id>")


api.add_resource(BookAppointmentResource, '/bookappointment')
api.add_resource(GetAllBookAppointmentResource, "/all-appointment")
api.add_resource(BookappointmentByUserResource, "/user-appointment/<int:user_id>")
api.add_resource(LawyerAppointmentsResource, '/lawyers/<int:lawyer_id>/appointments')
api.add_resource(LawfirmAppointmentsResource, '/lawfirms/<int:lawfirm_id>/appointments')



@app.route('/')
@app.route('/index')
def index():
    return 'This is my first flask project!!'


# api.add_resource(BookappointmentResource, "/create-appointment")
# api.add_resource(GetAllBookAppointmentResource, "/all-appointment")
# api.add_resource(UserBookAppointmentsResource, "/user-appointment")
# api.add_resource(BookappointmentUpdateResource, "/update-bookappointment/<int:bookappointment_id>")
# api.add_resource(BookappointmentDeleteResource, "/detele-bookappointment/<int:bookappointment_id>")