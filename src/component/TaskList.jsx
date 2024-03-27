import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react"; // Import Card components from Material Tailwind

const TaskList = ({ tasks }) => {
  // Group tasks based on their status
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = []; // Initialize an array for the status if it doesn't exist
    }
    acc[task.status].push(task); // Push the task into the corresponding status array
    return acc;
  }, {});

  return (
    <div className="flex gap-2 p-0 m-0 overflow-x-scroll w-full scrollbar">
      {Object.entries(groupedTasks).map(([status, tasks]) => (
        <Card
          key={status}
          className="mb-4 min-w-40 md:w-56 bg-white overflow-hidden rounded-xl "
        >
          <CardHeader className="text-center py-1 bg-blue-400 rounded-none m-0">
            {status}
          </CardHeader>
          <CardBody className="p-0 overflow-auto flex flex-col px-2">
            {tasks.map((task) => (
              <div key={task.id} className="bg-slate-200 my-2 rounded-md px-2">
                <p>{task.title}</p>
                <p>{task.description}</p>

                {/* Render other task details */}
              </div>
            ))}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
