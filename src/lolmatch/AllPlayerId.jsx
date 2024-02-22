import React, { useState } from "react";
import './allplayerId.css'; // CSS 파일을 import 합니다.
//import ParticipentInfo from "./ParticipentInfo";

//const AllPlayerId = (/*{userAndChampIdList}*/) => {
const AllPlayerId = (props) => {
  const [dataInfo] = useState(props);
  const [myInfo] = useState(props.my);
  // 2차원 배열로 변환

  let membersList = dataInfo.datainfo.info.participants;

  const rows1 = [];//blue
  const rows2 = [];//red
  const rows = [];//red
  for (let i = 0; i < membersList.length; i++) {
    if(membersList[i].teamId==100)
      rows1.push(membersList[i]);
    else
      rows2.push(membersList[i]);
  }

  for (let i = 0; i < membersList.length; i += 2) {
    rows.push(membersList.slice(i, i + 2));
  }

  return (
    <div id="allplayerdiv">
      <table>
        <tbody>
            {rows1.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>
                  <img src={"https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+rows1[rowIndex].championName+".png"} width="20" height="20"/>
                  <p className={ myInfo.summonerName===rows1[rowIndex].summonerName ? 'my-p':''}>{rows1[rowIndex].riotIdGameName}</p>
                </td>
                <td>
                  <img src={"https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+rows2[rowIndex].championName+".png"} width="20" height="20"/>
                  <p className={ myInfo.summonerName===rows2[rowIndex].summonerName ? 'my-p':''}>{rows2[rowIndex].riotIdGameName}</p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlayerId;
