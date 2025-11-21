import asyncio
from motor.motor_asyncio import AsyncIOMotorClient

async def check_notes():
    client = AsyncIOMotorClient('mongodb://localhost:27017')
    db = client['mbc']
    notes = db['notes']
    all_notes = await notes.find().sort('_id', -1).to_list(None)
    print(f"Total notes: {len(all_notes)}\n")
    for i, note in enumerate(all_notes[:10]):  # Show last 10
        print(f"{i+1}. Note Type: {note['note_type']}")
        print(f"   Content: {note['content'][:40]}...")
        print(f"   Reminder Date: {note.get('reminder_date', 'NULL')}")
        print(f"   Reminder Time: {note.get('reminder_time', 'NULL')}")
        print()
    
    client.close()

asyncio.run(check_notes())
