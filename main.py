from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import JSONResponse

app = FastAPI()

# Schema for POST input
class NameRequest(BaseModel):
    name: str

# GET endpoint
@app.get("/")
def welcome_user():
    return JSONResponse(content={"message": "Hello! Welcome to the API"})

# POST endpoint
@app.post("/welcome")
def personalized_welcome(request: NameRequest):
    name = request.name
    return JSONResponse(content={"message": f"Hello {name}, welcome to the API!"})
