from typing import List
from datetime import datetime, date, timedelta
from sqlalchemy.dialects.mysql import LONGTEXT
from sqlalchemy import or_
from werkzeug.security import generate_password_hash, check_password_hash
import hashlib
import pytz
import moment

from app import app, db

# All Users Table; clients, Lawyers and Lawfirm.
    
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, index=True)
    username = db.Column(db.String(50))
    email = db.Column(db.String(50))
    phone = db.Column(db.String(15))
    password = db.Column(db.String(150))
    timestamp = db.Column(db.DateTime, default=datetime.now())

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    def set_password(self, password: str):
        self.password = generate_password_hash(password)

    def check_password(self, password: str):
        return check_password_hash(self.password, password)
    
    @classmethod
    def find_by_id(cls, _id: int) -> "Users":
        return cls.query.filter_by(id=_id).first()
    
    @classmethod
    def find_by_username(cls, username: str) -> "Users":
        return cls.query.filter_by(username=username).first()
    
    @classmethod
    def find_by_email(cls, email: str) -> "Users":
        return cls.query.filter_by(email=email).first()


class Lawyers(db.Model):
    id = db.Column(db.Integer, primary_key = True, index=True)
    fullname = db.Column(db.String(200), nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    city = db.Column(db.String(255) , nullable=False)
    country = db.Column(db.String(50) , nullable=False)
    phone = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    linkedIn = db.Column(db.String(255), nullable=False)
    website = db.Column(db.String(255), nullable=False)
    education = db.Column(db.String(1000), nullable=False)
    barLicenseNumber = db.Column(db.String(255), nullable=False)
    practiceArea = db.Column(db.String(250), nullable=False)
    language = db.Column(db.String(50), nullable=False)
    price = db.Column(db.String(10), nullable=False)
    image = db.Column(db.String(1111000000))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    timestamp = db.Column(db.DateTime, default=datetime.now())


    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, _id: int) -> "Lawyers":
        return cls.query.filter_by(id=_id).first()
    
    @classmethod
    def find_by_user_id(cls, _userid: int) -> "Lawyers":
        return cls.query.filter_by(user_id=_userid).first()
    
class Lawfirms(db.Model):
    id = db.Column(db.Integer, primary_key=True, index=True)
    lawfirmName = db.Column(db.String(255), nullable=False)
    businessAddress = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    country = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    website = db.Column(db.String(255))
    practiceArea = db.Column(db.String(255), nullable=False)
    barAssociationsMembership = db.Column(db.String(255), nullable=False)
    language = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(500))
    logoImage = db.Column(db.String(111100000000))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    timestamp = db.Column(db.DateTime, default=datetime.now())

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, _id: int) -> "Lawfirms":
        return cls.query.filter_by(id=_id).first()
    
    @classmethod
    def find_by_user_id(cls, _userid: int) -> "Lawfirms":
        return cls.query.filter_by(user_id=_userid).first()

    
class BookAppointments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullName = db.Column(db.String(255), nullable=False)
    phoneNumber = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    service = db.Column(db.String(255), nullable=False)
    appointmentDate = db.Column(db.Date, nullable=False)
    description = db.Column(db.String(500), nullable=False)
    communicationPreferences = db.Column(db.String(255), nullable=False)
    appointmentTime = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    lawyer_id = db.Column(db.Integer, db.ForeignKey("lawyers.id"))
    lawfirm_id = db.Column(db.Integer, db.ForeignKey("lawfirms.id"))
    timestamp = db.Column(db.DateTime, default=datetime.now())

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, _id: int) -> "BookAppointments":
        return cls.query.filter_by(id=_id).first()
    
    @classmethod
    def find_by_userid(cls, _userid: int) -> "BookAppointments":
        return cls.query.filter_by(user_id=_userid).first()
    


