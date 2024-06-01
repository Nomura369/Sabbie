import { createSlice } from "@reduxjs/toolkit";

// Part1: Define Slice (including reducers and actions)
const initialState = { isQuestion1: true, whichQuestion2: "", emotions: []};

const questionSlice = createSlice({
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
    chooseEmotions: (state, action) => { // 記錄使用者選擇的情緒細項
      state.emotions = state.emotions.push(action.payload);
    },
    resetState: () => initialState // 定義重置狀態的 reducer（將使用在首頁）
  },
});

export const selectIsQuestion1 = (state) => state.question.isQuestion1;
export const selectWhichQuestion2 = (state) => state.question.whichQuestion2;
export const selectEmotions = (state) => state.question.emotions;
export const { toggleIsQuestion1, chooseWhichQuestion2, chooseEmotions, resetState} = questionSlice.actions;
export default questionSlice.reducer;