import React from 'react';
import './addbutton.css'; // CSS 파일을 import 합니다.

const AddButton = (props) => {

  const addBtn = () => {
    props.callFunctionFromParent();
  };

  return (
    <div className='add-button'>
      <button onClick={addBtn}>더 보기</button>
    </div>
  );
};

export default AddButton;
