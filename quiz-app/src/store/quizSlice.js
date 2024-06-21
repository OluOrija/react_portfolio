import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: [],  // Ensure quizzes is initialized as an array
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, action) => {
      state.quizzes.push(action.payload);
    },
  },
});

export const { setQuizzes, addQuiz } = quizSlice.actions;
export default quizSlice.reducer;
