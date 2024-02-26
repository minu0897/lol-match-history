import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios 추가
import './searchPageDeco.css';

const SearchPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [hashStar, setHashStar] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const regex = /^(.+?)#(.+?)$/; // 이름과 '#' 사이, '#'과 끝 사이의 문자열을 추출하는 정규 표현식

    if (regex.test(inputValue)) {
      const match = inputValue.match(regex);
      setName(match[1].trim()); // 이름 설정
      setHashStar(match[2].trim()); // '#' 다음의 문자열 설정
      setErrorMessage(''); // 에러 메시지 초기화

      navigate('/search',{ state: { name: match[1].trim(), tag: match[2].trim()} },);
    } else {
      setName(''); // 이름 초기화
      setHashStar(''); // '#' 다음의 문자열 초기화
      setErrorMessage('양식에 맞추어 닉네임과 태그를 작성해주세요.'); // 에러 메시지 설정
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="middle">
      <h1>롤 전적검색</h1>
      <div className="content">
        <input
          type="text"
          placeholder="플레이어 이름#태그"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>Submit</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {name && hashStar && (
          <div>
            <p>닉네임 : {name}</p>
            <p>태그 : {hashStar}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
