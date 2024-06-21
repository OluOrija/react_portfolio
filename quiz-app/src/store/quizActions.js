import { setQuizzes } from './quizSlice';

export const fetchQuizzes = () => async (dispatch) => {
  try {
    //const response = await fetch('https://opentdb.com/api_category.php');  // Example API call
    //const data = await response.json();
    const quizzes = [
        {
          id: 1,
          title: 'Quiz 1',
          questions: [
            { id: 1, text: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3'], correctOption: 0 },
            { id: 2, text: 'Question 2', options: ['Option 1', 'Option 2', 'Option 3'], correctOption: 1 },
          ],
        },
        {
          id: 2,
          title: 'Quiz 2',
          questions: [
            { id: 1, text: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3'], correctOption: 2 },
            { id: 2, text: 'Question 2', options: ['Option 1', 'Option 2', 'Option 3'], correctOption: 0 },
          ],
        },
      ];

    const data = quizzes;


    // Ensure data is an array
    if (Array.isArray(data)) {
        dispatch(setQuizzes(data));
      } else {
        console.error("Expected an array of quizzes");
      }
    } catch (error) {
      console.error("Failed to fetch quizzes", error);
    }
  };