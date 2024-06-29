// src/pages/QuizPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quiz from '../components/Quiz';

const QuizPage = () => {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/quiz')
      .then(response => setQuizData(response.data))
      .catch(error => console.error('Error fetching quiz data:', error));
  }, []);

  return (
    <div className="quiz-page">
      {quizData && (
        <Quiz
          question={quizData.question}
          options={quizData.options}
          correctAnswer={quizData.correctAnswer}
        />
      )}
    </div>
  );
};

export default QuizPage;
