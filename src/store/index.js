import { configureStore } from "@reduxjs/toolkit";
import { listReducer, addToList, removeFromList } from "./slices/listSlice";

const store = configureStore({
  reducer: {
    budgetList: listReducer,
  },
});

export { store, addToList, removeFromList };
