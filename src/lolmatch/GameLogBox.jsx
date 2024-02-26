import React, { useState, useEffect } from 'react';
import AllPlayerId from "./AllPlayerId";
import PlayerChampInfo from "./PlayerChampInfo/PlayerChampInfo";
import GameInfo from "./GameInfo/GameInfo";
import './container.css';
import axios from 'axios';

const GameLogBox = (props) => {
    const [infodata, setData] = useState();
    const [targetInfo, setTargetData] = useState();

    useEffect(() => {
        const fetchDataMatch = async () => {
            try {
                const response = await axios.post('http://localhost:8000/match-info/',{matchid:props.match_id}); // FastAPI 엔드포인트에 맞게 URL 변경
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDataMatch();
    }, []);


    useEffect(() => {
        if (infodata) {
            setTargetData(infodata.info.participants.find(participant => participant.puuid == props.puuInfo ));
            console.log('gamelogbox render')
        }
    }, [infodata]);

    useEffect(() => {
        if (infodata) {
        }
    }, [targetInfo]);

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
