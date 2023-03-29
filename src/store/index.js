import { configureStore } from "@reduxjs/toolkit";
import {
  listReducer,
  searchTerm,
  addExpense,
  removeExpense,
} from "./slices/listSlice";

const store = configureStore({
  reducer: {
    budgetList: listReducer,
  },
});

export { store, searchTerm, addExpense, removeExpense };
