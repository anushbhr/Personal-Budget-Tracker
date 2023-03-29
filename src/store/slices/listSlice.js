import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    searchInput: "",
    cars: [],
  },
  reducers: {
    searchTerm(state, action) {
      state.searchInput = action.payload;
    },
    addExpense(state, action) {
      state.push(action.payload);
    },
    removeExpense(state, action) {
      const updated = state.filter((ele) => ele.id !== action.payload);
      state.cars = updated;
    },
  },
});

export const { searchTerm, addExpense, removeExpense } = listSlice.actions;
export const listReducer = listSlice.reducer;
