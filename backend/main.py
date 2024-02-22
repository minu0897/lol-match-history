# app.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from riotapi import fun_apiUserId
from riotapi import fun_apiMatchHistory
from riotapi import fun_apiMatchInfo
from pydantic import BaseModel

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React 프론트엔드의 주소
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

@app.get("/user-info")
async def get_data_from_app1():
    userInfo = fun_apiUserId("닝니이니","kr1")["puuid"]
    return userInfo

@app.get("/match-history")
async def get_data_from_app2():
    matHis = fun_apiMatchHistory(fun_apiUserId("닝니이니","kr1")["puuid"])
    return matHis

class Matinfo(BaseModel):
    matchid: str

#https://developer.riotgames.com/apis#match-v5
@app.post("/match-info/")
def get_data_from_app3(matinfo: Matinfo):
    matInfo = fun_apiMatchInfo(matinfo.matchid)
    return matInfo