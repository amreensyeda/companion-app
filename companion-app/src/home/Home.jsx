import React, { useState } from 'react';
import { auth } from '../FirebaseConfig';
import './home.css';
import Card from '../card/Card';
import QuestionScreen from '../questions/QuestionScreen';

function Home({ user }) {
  const [showCard, setShowCard] = useState(true);
  const [showQuestionScreen, setShowQuestionScreen] = useState(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      alert('You have logged out...');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  }

  const handleCloseCard = () => {
    setShowCard(false);
  }

  const handlePressed = () => {
    setShowQuestionScreen(true);
  }

  const handleAllQuestionsAnswered = () => {
    setAllQuestionsAnswered(true);
  }

  return (
    <div>
      <ul className="nav-section">
        <li className="username">{user.displayName}</li>
        <li><button onClick={handleLogout} className="login-button">Logout</button></li>
      </ul>
      {showCard && !showQuestionScreen && !allQuestionsAnswered && (
        <Card onClose={handleCloseCard} onPressed={handlePressed} />
      )}
      {showQuestionScreen && (
        <QuestionScreen onAllQuestionsAnswered={handleAllQuestionsAnswered} />
      )}
      {showCard || (
        <div className='show-question-circle'>
          <a href='{</ Card}'><img src='https://static.vecteezy.com/system/resources/previews/016/146/265/original/questionnaire-icon-in-comic-style-online-survey-cartoon-illustration-on-white-isolated-background-checklist-report-splash-effect-business-concept-vector.jpg' className='show-questions'/></a>
        </div>
      )}
    </div>
  );
}

export default Home;
