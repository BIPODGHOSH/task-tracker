// store/todoSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "Description of Task 1",
      startDate: new Date(),
      endDate: null,
      status: "Pending",
      assignee: "John Doe",
      priority: "P1",
    },
  ],
  filters: {
    assignee: "",
    priority: "",
    startDateFrom: null,
    startDateTo: null,
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateTask, setFilters } =
  todoSlice.actions;
export default todoSlice.reducer;
