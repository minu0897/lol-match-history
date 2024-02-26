import React, { useState, useEffect, forwardRef,useImperativeHandle } from 'react';
import './addbutton.css'; // CSS 파일을 import 합니다.
import loadingGif from './imgfile/loading_.gif';

const AddButton = forwardRef((props,ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const addBtn = () => {
    props.callFunctionFromParent();
    setIsLoading(true); // 버튼 클릭 시 isLoading 상태를 true로 설정
    // 여기에 데이터를 불러오는 등의 비동기 작업을 수행할 수 있습니다.
    // 예시로 setTimeout 함수를 사용하여 2초 후에 로딩 상태를 false로 변경합니다.
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const button_false = () => {
      setIsLoading(false);
  };

  useImperativeHandle(ref,() =>({
    button_false,
  }));

  return (
    <div className='add-button'>
      <button className="button" onClick={addBtn} disabled={isLoading}>
        {
          isLoading ? (
            <img src={loadingGif} alt="로딩 중..." className="loading" />
          ) : ('더 보기')
        }
      </button>
    </div>
  );
});

export default AddButton;
