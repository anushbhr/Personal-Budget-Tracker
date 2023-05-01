import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    dataList: [],
  },
  reducers: {
    addToList(state, action) {
      state.dataList.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeFromList(state, action) {
      const updatedList = state.dataList.filter(
        (ele) => ele.id !== action.payload
      );
      state.dataList = updatedList;
    },
  },
});

export const { addToList, removeFromList } = listSlice.actions;
export const listReducer = listSlice.reducer;
