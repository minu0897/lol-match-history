import React from "react";
import './champId.css';

const ChampId = ({champid}) => {
    return (
        <div>
            <img src = {"https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+champid+".png"} className="chamimg"></img>
        </div>
    );
};

export default ChampId;