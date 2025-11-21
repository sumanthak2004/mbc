from pydantic import BaseModel, EmailStr
from typing import Literal


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class LoginResponse(BaseModel):
    role: Literal["admin", "doctor"]
    message: str


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    role: Literal["admin", "doctor"]


class SimpleMessage(BaseModel):
    message: str


class AppointmentCreate(BaseModel):
    doctor: str
    datetime: str
    purpose: str
    client: str = "TBD"
    duration: int = 60


class AppointmentResponse(BaseModel):
    id: str
    doctor: str
    datetime: str
    purpose: str
    client: str
    duration: int = 60
    status: str = "scheduled"


class ClientCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone: str | None = None
    date_of_birth: str | None = None
    gender: str | None = None


class ClientResponse(BaseModel):
    id: str
    first_name: str
    last_name: str
    email: EmailStr
    phone: str | None = None
    date_of_birth: str | None = None
    gender: str | None = None


class NoteCreate(BaseModel):
    note_type: str  # Progress Note, Intake Form, Session Summary, etc.
    content: str
    client_id: str | None = None  # Optional: link to a specific client
    reminder_date: str | None = None  # Reminder date (YYYY-MM-DD)
    reminder_time: str | None = None  # Reminder time (HH:MM)


class NoteResponse(BaseModel):
    id: str
    note_type: str
    content: str
    client_id: str | None = None
    reminder_date: str | None = None
    reminder_time: str | None = None
    created_at: str
    created_by: str = "Dr. Admin"
    completed: bool = False
