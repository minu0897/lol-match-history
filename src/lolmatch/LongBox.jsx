import React, { useState, useEffect } from 'react';
import './longbox.css'; // CSS 파일을 import 합니다.
import GameLogBox from './GameLogBox';
import axios from 'axios';


const LongBox = () => {
  const [count, setCount] = useState(5); // 초깃값은 5로 설정합니다.
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/match-history'); // FastAPI 엔드포인트에 맞게 URL 변경
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const renderLongBoxes = () => {
    const longBoxes = [];
    for (let i = 0; i < count; i++) {
      if(i==0)
      longBoxes.push(<GameLogBox key={i} match_id={data[i]} />);
    }
    return longBoxes;
  };                                                                                           

  const showMoreLongBoxes = () => {
    setCount(prevCount => prevCount + 5); // 현재 보여지는 LongBox 개수에 5를 더합니다.
  };

  return (
    <div className="long-box">
      <div className="">                                                                                             
        {renderLongBoxes()}
      </div>
      <button onClick={showMoreLongBoxes}>더 보기</button>
    </div>
  );
}

export default LongBox;
