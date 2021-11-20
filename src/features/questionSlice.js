import { createSlice } from "@reduxjs/toolkit";
// create a slice function with name, initial State and reducer function.
export const questionSlice = createSlice({
  name: "questions",
  initialState: 0,
  reducers: {
    addQuestion: (state, action) => {
      console.log('sasa', state, action);
      return state + 1;
      //Add Question reducer function
    },
    editQuestion: (state, action) => {
      //Edit Question Reducer function
    },
    removeQuestion: (state, action) => {
      //Remove Question Reducer function
    },
  },
});

export const {
  addQuestion,
  editQuestion,
  removeQuestion,
} = questionSlice.actions

export const selectQuestions = state => state.questions

export default questionSlice.reducer
