import React from "react";

const GameResult = ({ result }) => {
  let message;
  let color;

  if (result == "win") {
    message = "승리";
    color = "lightblue";
  } else if (result == "lose") {
    message = "패배";
    color = "pink";
  } else {
    message = "결과 없음";
    color = "gray";
  }

  return <p style={{ color }}>{message}</p>;
};

export default GameResult;
