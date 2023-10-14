import React, { useState } from 'react';
import './questionScreen.css';
import Dashboard from '../Dashboard/Dashboard';

function QuestionScreen({ onAllQuestionsAnswered }) {
  const questions = [
    'How are you feeling today?',
    'Have you been getting enough sleep and rest?',
    'How are you feeling emotionally lately?',
    'Are you experiencing increased stress or anxiety?',
    'How Many People Did You Meet Today?'
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [answerText, setAnswerText] = useState('');

  const handleQuestionSubmit = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerText('');
    } else {
      // If it's the last question, set the state to indicate that all questions are answered
      setAllQuestionsAnswered(true);
      onAllQuestionsAnswered();
    }
  };

  return (
    <div>
      {allQuestionsAnswered ? (
        
          <Dashboard/>
        
      ) : (
        <label className='question-container'>
          <h1 className='heading'>Answer Only Between (1-10)</h1>
          <h3 className='heading'>{questions[currentQuestionIndex]}</h3>
          <input type='text' 
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}/>
          <button className='submit-questions' onClick={handleQuestionSubmit}>
            Submit
          </button>
        </label>
      )}
    </div>
  );
}

export default QuestionScreen;
