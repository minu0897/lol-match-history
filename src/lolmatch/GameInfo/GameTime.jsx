import React from "react";

const GameTime = ({time}) => {
    let min = Math.floor(time/60);
    let sec = time%60;
    if (sec < 10)
        sec ='0'+sec;
    return (
        <div>
            <p>{min}:{sec}</p>
        </div>
    );
};

export default GameTime;