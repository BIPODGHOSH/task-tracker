import React from "react";
import { MdDelete } from "react-icons/md";
import { updateTask, deleteTask } from "../store/todoSlice";
import { useDispatch } from "react-redux";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(updateTask({ id: task.id, toggle: true }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className="flex justify-between items-center py-3">
      <div className={`flex-1 ${task.isComplite ? "line-through" : ""}`}>
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-sm">{task.description}</p>
      </div>
      <div className="flex items-center space-x-4">
        {!task.isComplite && (
          <button
            className="px-3 py-1 bg-blue-500 text-white font-semibold rounded"
            onClick={handleToggle}
          >
            Complete
          </button>
        )}
        <MdDelete className="cursor-pointer" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default TaskItem;
