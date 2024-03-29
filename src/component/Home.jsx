// Home.jsx

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import Filter from "./Filter";
import TaskList from "./TaskList";

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const filters = useSelector((state) => state.tasks.filteredTasks);
  console.log(filters);

  return (
    <div
      className="container mx-auto p-4"
      style={{ border: "1px solid white" }}
    >
      <div className="flex justify-between">
        <Filter />
        <TaskForm />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between mb-4"></div>
      {filters.length === 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <TaskList tasks={filters} back={true} />
      )}
    </div>
  );
};

export default Home;
