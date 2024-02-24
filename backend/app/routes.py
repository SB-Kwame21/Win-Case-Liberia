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
    BookappointmentResource,  
    BookappointmentUpdateResource, 
    DeleteBookappointmentResource,
    GetAllBookAppointmentResource,
    BookappointmentByUserResource,
    AttorneyAppointmentsResource,
    LawfirmAppointmentsResource
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
api.add_resource(UserLawyerResource, "/user-lawyer")
api.add_resource(LawyerUpdateResource, "/update-lawyer/<int:lawyer_id>")
api.add_resource(LawyerDeleteResource, "/detele-lawyer/<int:lawyer_id>")

api.add_resource(CreateLawfirmResource, "/create-lawfirm")
api.add_resource(GetAllLawfirmResource, "/all-lawfirms")
api.add_resource(UserLawfirmResource, "/user-lawfirm")
api.add_resource(LawfirmUpdateResource, "/update-lawfirm/<int:lawfirm_id>")
api.add_resource(LawfirmDeleteResource, "/detele-lawfirm/<int:lawfirm_id>")

# api.add_resource(BookappointmentResource, "/create-appointment")
# api.add_resource(GetAllBookAppointmentResource, "/all-appointment")
# api.add_resource(UserBookAppointmentsResource, "/user-appointment")
# api.add_resource(BookappointmentUpdateResource, "/update-bookappointment/<int:bookappointment_id>")
# api.add_resource(BookappointmentDeleteResource, "/detele-bookappointment/<int:bookappointment_id>")

api.add_resource(BookappointmentResource, "/create-appointment")
api.add_resource(GetAllBookAppointmentResource, "/all-appointment")
api.add_resource(BookappointmentByUserResource, "/user-appointment/<int:user_id>")
api.add_resource(BookappointmentUpdateResource, "/update-bookappointment/<int:bookappointment_id>")
api.add_resource(DeleteBookappointmentResource, "/delete-bookappointment/<int:bookappointment_id>")
api.add_resource(AttorneyAppointmentsResource, "/attorney-appointments/<int:attorney_id>")
api.add_resource(LawfirmAppointmentsResource, "/lawfirm-appointments/<int:lawfirm_id>")




@app.route('/')
@app.route('/index')
def index():
    return 'This is my first flask project!!'


# api.add_resource(BookappointmentResource, "/create-appointment")
# api.add_resource(GetAllBookAppointmentResource, "/all-appointment")
# api.add_resource(UserBookAppointmentsResource, "/user-appointment")
# api.add_resource(BookappointmentUpdateResource, "/update-bookappointment/<int:bookappointment_id>")
# api.add_resource(BookappointmentDeleteResource, "/delete-bookappointment/<int:bookappointment_id>")
# api.add_resource(AttorneyAppointmentsResource, "/attorney-appointments/<int:attorney_id>")
# api.add_resource(LawfirmAppointmentsResource, "/lawfirm-appointments/<int:lawfirm_id>")