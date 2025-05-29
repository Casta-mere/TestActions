# Author: Casta-mere
import os
import sys
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from .functions.login import LoginManager
from pydantic import BaseModel
import uvicorn
import logging
import queue

logger = logging.getLogger("uvicorn") 
log_file_path = "server.log"
formatter = logging.Formatter(
    '[%(asctime)s] [%(levelname)s] [%(module)s.%(funcName)s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

origins = [
    "http://localhost:8555",  
    "http://127.0.0.1:8555", 
]

loginmanager = LoginManager()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],   
    allow_headers=["*"],   
)

class LoginRequest(BaseModel):
    account: str
    password: str

@app.post("/api/login")
async def login(req: LoginRequest):
    logger.info("Login attempt with account: %s, password: %s", req.account, req.password)
    result = loginmanager.login(req.account, req.password)
    if not result["success"]:
        raise HTTPException(status_code=401, detail="Login failed")
    return result

@app.get("/api/login")
async def loggedIn():
    if loginmanager._is_loggedIn():
        return {"loggedIn": True}
    return {"loggedIn": False}

@app.post("/api/logout")
async def logout():
    logger.info(f"Logout for {loginmanager.account}")
    loginmanager.logout()

def get_static_dir():
    if hasattr(sys, "_MEIPASS"):
        return os.path.join(sys._MEIPASS, "Frontend/static")
    return os.path.abspath("Frontend/static")

app.mount("/", StaticFiles(directory=get_static_dir(), html=True), name="static")

log_queue = queue.Queue()

class LogHandler(logging.Handler):
    def emit(self, record):
        log_queue.put(self.format(record))

def run_backend(app):
    logger = logging.getLogger("uvicorn")
    logger.setLevel(logging.INFO)
    handler = LogHandler()
    handler.setFormatter(logging.Formatter('%(message)s'))
    handler.setFormatter(formatter) 
    logger.addHandler(handler)
    
    file_handler = logging.FileHandler(log_file_path, encoding="utf-8")
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)

    uvicorn.run(app, host="127.0.0.1", port=8765, log_config=None)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8765, log_config=None)
