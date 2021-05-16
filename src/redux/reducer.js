import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const addItem = {
        id: Date.now(),
        item: action.payload.input,
        complete: false,
      };
      state.push(addItem);
    },
    select: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].complete = action.payload.complete;
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, select, deleteItem } = reducerSlice.actions;
export default reducerSlice.reducer;
