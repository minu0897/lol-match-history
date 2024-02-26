import React, { useState, useEffect,useRef } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios 추가
import UserInfo from './UserInfo';
import LongBox from './LongBox';
import AddButton from './AddButton';
import './searchafter.css'; // CSS 파일을 import 합니다.

const SearchAfter = (props) => {
  const [puuid, setData] = useState(null);
  const childComp = useRef({});
  const childbtnComp = useRef({});
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = { ...location.state };
//  const { userInfo } = location.state;
  console.log(location);

  const fetchDataUser = async () => {
    try {
      const response = await axios.post('http://localhost:8000/user-info/',{name:userInfo.name,tag:userInfo.tag}); // FastAPI 엔드포인트에 맞게 URL 변경
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, []);
  
  if(!puuid){
    return (<></>);
  }

  const call_par_add =()=>{//더 보기 버튼에서 이 함수 부름
    childComp.current.showMoreLongBoxes();
  }

  const handleChildRenderComplete = () => {
    childbtnComp.current.button_false();
  };

  return (
    <div className='searchafter'>
      <UserInfo puuInfo={puuid} />
      <LongBox puuInfo={puuid} ref={childComp} onRenderComplete={handleChildRenderComplete}   />
      <AddButton ref={childbtnComp} callFunctionFromParent ={call_par_add}/>
    </div>
  );
  
};

export default SearchAfter;
