import os

from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://127.0.0.1:27017/mbc")

client = AsyncIOMotorClient(MONGO_URI)
db = client.mbc
users_collection = db.users
appointments_collection = db.appointments
clients_collection = db.clients
notes_collection = db.notes
