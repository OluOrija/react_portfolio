// src/components/Quiz.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quiz.css'; // Import the CSS file for styling

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({}); // State to store user answers

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/quiz');
        setQuestions(response.data); // Assuming response.data is an array of questions
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, selectedOption) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: selectedOption
    }));
  };

  const handleSubmitQuiz = (event) => {
    event.preventDefault();
    // Handle submission of quiz answers (e.g., send to server, calculate score, etc.)
    console.log('User answers:', userAnswers);
    // Example: You can implement logic to submit answers to a backend API or calculate score locally
  };

  if (loading) {
    return <div className="quiz">Loading...</div>;
  }

  if (error) {
    return <div className="quiz">Error: {error}</div>;
  }

  return (
    <div className="quiz">
      <h2>Quiz</h2>
      <form onSubmit={handleSubmitQuiz}>
        {questions.map(question => (
          <div key={question.id} className="question">
            <p>{question.question}</p>
            <div className="options">
              {question.options.map(option => (
                <div key={option.id} className="option">
                  <label>
                    <input
                      type="radio"
                      name={`question_${question.id}`}
                      value={option.id}
                      checked={userAnswers[question.id] === option.id}
                      onChange={() => handleAnswerChange(question.id, option.id)}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default Quiz;
