// Home.jsx

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import Filter from "./Filter";
import TaskList from "./TaskList";
import { setFilters } from "../store/todoSlice";

const Home = () => {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  // const filters = useSelector((state) => state.tasks.filters);

  const filterTasks = (filterParams) => {
    dispatch(setFilters(filterParams));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 ">Task Board</h1>
      <div className="flex justify-between">
        <Filter filterTasks={filterTasks} />
        <TaskForm />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between mb-4"></div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
