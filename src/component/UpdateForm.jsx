import { Dialog } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/todoSlice";

const UpdateForm = ({ task, handleModal }) => {
  const [updateFormData, setUpdateFormData] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    startDate: task.startDate,
    status: task.status,
    assignee: task.assignee,
    priority: task.priority,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i m in submit handler");
    dispatch(updateTask(updateFormData));
    handleModal();
  };
  return (
    <div>
      <Dialog
        size="xs"
        open={open}
        className="bg-transparent shadow-none w-full flex items-center justify-center p-6  backdrop-blur-md bg-opacity-30 bg-slate-500 h-screen"
      >
        <form onSubmit={handleSubmit} className=" outline-none  md:w-1/3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={task.title}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
            disabled
          />
          <textarea
            name="description"
            placeholder="Description"
            value={task.description}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded resize-none"
            rows="3"
            disabled
          />
          <select
            name="status"
            value={task.status || "Pending"}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Deployed">Deployed</option>
            <option value="Deferred">Deferred</option>
          </select>
          <input
            type="text"
            name="assignee"
            placeholder="Assignee"
            value={task.assignee}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
            disabled
          />
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
            required
          >
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <div className=" flex justify-between mt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Task
            </button>
            <button onClick={handleModal} className="text-xl">
              X
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default UpdateForm;
