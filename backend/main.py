# app.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from riotapi import fun_apiUserId
from riotapi import fun_apiMatchHistory
from riotapi import fun_apiMatchInfo
from riotapi import fun_apiUserInfo
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

class UserInfo(BaseModel):
    name: str
    tag: str

@app.post("/user-info")
async def get_data_from_app1(userInfo:UserInfo):
    print('user-info start')
    print('para')
    print('name :"',userInfo.name,'"',sep='')
    print('tag :"',userInfo.tag,'"',sep='')
    print('------------------------')
    getuserInfo = fun_apiUserId(userInfo.name,userInfo.tag)['puuid']
    return getuserInfo

class PuuInfo(BaseModel):
    puuId: str

@app.post("/match-history")
async def get_data_from_app2(puuInfo:PuuInfo):
    print('match-history start')
    print('para')
    print('puuId :"',puuInfo.puuId,'"',sep='')
    matHis = fun_apiMatchHistory(puuInfo.puuId)
    print('result:')
    print(matHis)
    print('------------------------')
    return matHis

class Matinfo(BaseModel):
    matchid: str

#https://developer.riotgames.com/apis#match-v5
@app.post("/match-info/")
async def get_data_from_app3(matinfo: Matinfo):
    print('match-info start')
    print('para')
    print('matchid :"',matinfo.matchid,'"',sep='')
    print('------------------------')
    matInfo = fun_apiMatchInfo(matinfo.matchid)
    return matInfo

#https://developer.riotgames.com/apis#summoner-v4/GET_getByPUUID
@app.post("/user-info-data/")
async def get_data_from_app4(puuInfo:PuuInfo):
    print('user-info-data start')
    print('para')
    print('puuId :"',puuInfo.puuId,'"',sep='')
    print('------------------------')
    userInfo = fun_apiUserInfo(puuInfo.puuId)
    return userInfo