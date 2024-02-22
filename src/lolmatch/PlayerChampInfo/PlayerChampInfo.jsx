import React, { useState } from "react";
import ChampId from "./ChampId";
import KdaGrade from "./KdaGrade";
import ItemList from "./ItemList";

const PlayerChampInfo = (props) => {
    const [myInfo] = useState(props.my);
    let kill = myInfo.kills;
    let death = myInfo.deaths;
    let assist = myInfo.assists;
    let itemlist = [1,2,3,4,5,6];
    
    return (
        <div>
            <ChampId champid={myInfo.championName}/>
            <KdaGrade kill={kill} death={death} assist={assist}/>
            <ItemList itemlist={itemlist}/>
        </div>
    )
}

export default PlayerChampInfo;