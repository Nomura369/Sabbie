import { configureStore, createSlice } from "@reduxjs/toolkit";

// Part1: Define Slice (including reducers and actions)
const initialState = { isQuestion1: true, whichQuestion2: ""};

const counterSlice = createSlice({
  name: "question",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleIsQuestion1: (state) => { // 切換 Q1 和 Q2 元件
        state.isQuestion1 = state.isQuestion1 === true ? false : true;
    },
    chooseWhichQuestion2: (state, action) => { // 根據使用者點擊的分類決定 Q2 的渲染方式
        state.Question2 = action.payload;
    },
  },
});

export const selectIsQuestion1 = (state) => state.question.isQuestion1;
export const selectWhichQuestion2 = (state) => state.question.whichQuestion2;
export const { toggleIsQuestion1, chooseWhichQuestion2 } = questionSlice.actions;
export default questionSlice.reducer;