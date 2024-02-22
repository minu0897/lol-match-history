import React, { useState, useEffect } from 'react';
import AllPlayerId from "./AllPlayerId";
import PlayerChampInfo from "./PlayerChampInfo/PlayerChampInfo";
import GameInfo from "./GameInfo/GameInfo";
import './container.css';
import axios from 'axios';

const GameLogBox = (props) => {
    const [infodata, setData] = useState();
    const [puuid, setUserData] = useState();
    const [targetInfo, setTargetData] = useState();
    
    useEffect(() => {
        const fetchDataMatch = async () => {
            try {
                const response = await axios.post('http://localhost:8000/match-info/',{matchid:props.match_id}); // FastAPI 엔드포인트에 맞게 URL 변경
                setData(response.data);
                // setTargetData(response.data.info.participants.find(participant => participant.puuid === puuid )); // 수정이 필요한 부분
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:8000/user-info/'); // FastAPI 엔드포인트에 맞게 URL 변경
                setUserData(response.data);
                fetchDataMatch();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if(props.match_id){
            fetchUser();
        }
    }, [props.match_id]);


    useEffect(() => {
        if (infodata && puuid) {
            setTargetData(infodata.info.participants.find(participant => participant.puuid === puuid ));
        }
    }, [infodata, puuid]); // infodata와 puuid가 변경될 때마다 실행

    return (
        <>
            {targetInfo != undefined  && (
                <div className={ targetInfo.win ? 'container-win':'container-lose'} >
                    {infodata !== undefined  && (
                        <>
                            <GameInfo gamemode={infodata.info.gameMode} result={targetInfo.win?'win':'lose'} time={targetInfo.timePlayed}/> 
                            <PlayerChampInfo my={targetInfo} />
                            <AllPlayerId datainfo={infodata} my={targetInfo} />
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default GameLogBox;
