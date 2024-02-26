import React, { useState, useEffect, forwardRef,useImperativeHandle } from 'react';
import './longbox.css'; // CSS 파일을 import 합니다.
import GameLogBox from './GameLogBox';
import axios from 'axios';


const LongBox = forwardRef((props,ref) => {
  const [count, setCount] = useState(1); // 초깃값은 5로 설정합니다.
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:8000/match-history/',{puuId:props.puuInfo}); // FastAPI 엔드포인트에 맞게 URL 변경
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    props.onRenderComplete();
  }, [count]);
                                                                                       

  const showMoreLongBoxes = () => {
    setCount(prevCount => prevCount + 10); // 현재 보여지는 LongBox 개수에 5를 더합니다.
  };
  
  useImperativeHandle(ref,() =>({
    showMoreLongBoxes,
  }));

  if(data.length ==0){
    return (<></>);
  }
  

  const renderLongBoxes = () => {
    const longBoxes = [];
    for (let i = 0; i < count; i++) {
        longBoxes.push(<GameLogBox key={i} match_id={data[i]} puuInfo={props.puuInfo} />);
    }
    return longBoxes;
  };    


  return (
    <div className="long-box">
      <div className="">                                                                                             
        {renderLongBoxes()}
      </div>
    </div>
  );
});

export default LongBox;
