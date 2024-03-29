// store/todoSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "Description of Task 1",
      // startDate: new Date(),
      endDate: null,
      status: "Pending",
      assignee: "John Doe",
      priority: "P1",
    },
  ],
  // filters: {
  //   assignee: "",
  //   priority: "",
  //   startDateFrom: null,
  //   startDateTo: null,
  // },
  filteredTasks: [],
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
        console.log(action.payload);
        state.tasks[index] = action.payload;
      }
    },
    filterTask(state, action) {
      const { assignee, priority } = action.payload;
      state.filteredTasks = state.tasks.filter((task) => {
        return (
          (assignee === "" || task.assignee === assignee) &&
          (priority === "" || task.priority === priority)
        );
      });
    },
    clearFilteredTasks(state) {
      state.filteredTasks = [];
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateTask,
  filterTask,
  clearFilteredTasks,
} = todoSlice.actions;
export default todoSlice.reducer;
