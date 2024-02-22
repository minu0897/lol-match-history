import React from "react";
import GameMode from "./GameMode";
import GameResult from "./GameResult";
import GameTime from "./GameTime";

const GameInfo = (props) => {
    const mode = props.gamemode;
    const result = props.result;
    const time = props.time;

    return (
        <div>
            <GameMode info={mode}/>
            <GameResult result={result}/>
            <GameTime time={time}/>
        </div>
    );
};

export default GameInfo;