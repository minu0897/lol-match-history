import React from "react";
import GameMode from "./GameMode";
import GameResult from "./GameResult";
import GameTime from "./GameTime";
import './gameinfo.css';

const GameInfo = (props) => {
    const mode = props.gamemode;
    const result = props.result;
    const time = props.time;

    return (
        <div>   
            <GameMode info={mode}/>
            <div className="container">  
                <GameResult result={result}/>
            </div>
            <div className="container">  
                <GameTime time={time}/>
            </div>
        </div>
    );
};

export default GameInfo;