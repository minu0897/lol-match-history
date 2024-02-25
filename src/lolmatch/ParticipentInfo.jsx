import React from "react";
import SummonerId from "./SummonerId";
import ChampId from "./PlayerChampInfo/ChampId";

const ParticipentInfo = (/*{champid}, {summonerid}*/) => {

    let summonerid = '닝니이니';
    return (
        <div>
            <ChampId champid = {1}/>
            <SummonerId summonerid = {summonerid}/>
        </div>
    );
};

export default ParticipentInfo;