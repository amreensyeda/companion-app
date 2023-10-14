import React from 'react';
import './card.css';

function Card({ onClose ,onPressed}) {
  return (
    <div className="card-container">
      <h1>Answer the Questions!</h1>
      <img
        className="image"
        src="https://obriencg.com/wp-content/uploads/2020/08/question-and-answer-cartoon-cartoon-man-with-questions.gif"
      />
      <div className="sub-container">
        <button className="yes" onClick={onPressed}>Yes!😊</button>
        <button className="no" onClick={onClose}>
          No 😌
        </button>
      </div>
    </div>
  );
}

export default Card;
