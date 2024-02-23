import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './userInfo.css'; // CSS 파일을 import 합니다.

const UserInfo = (props) => {
  const [userinfo, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user-info-data'); // FastAPI 엔드포인트에 맞게 URL 변경
        setData(response.data);
        console.log(userinfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return(
    <div className="my-user-info">
      {/*사용자 정보*/}
    </div>
  );
};

export default UserInfo;