# API 호출을 위해 requests 모듈을 사용
import requests
import os


def fun_apiUserId(name,tagline):
    return fun_api("https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/"+name+"/"+tagline+"?api_key=")

def fun_apiMatchHistory(puuid):
    return fun_api("https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/"+puuid+"/ids?start=0&count=20&api_key=")

def fun_apiMatchInfo(matchId):
    return fun_api("https://asia.api.riotgames.com/lol/match/v5/matches/"+matchId+"?api_key=")


def fun_api(url):
    # API 에서 공통적으로 사용하는 텍스트를 선언
    key = open(os.getcwd() +'/riotapi/riotkey.txt','r')
    # api 호출시 사용되는 url
    # get method 를 통해 api 호출
    req = requests.get(url+key.readline())
    key.close()
    
    return req.json()
