import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, clearFilteredTasks } from "../store/todoSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Dialog } from "@material-tailwind/react";
import { useAuth0 } from "@auth0/auth0-react";

const TaskForm = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "P1",
    status: "Pending",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (user) {
      setOpen((cur) => !cur);
    } else {
      toast.warn("Please Login");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: formData.title,
      description: formData.description,
      // startDate: new Date(),
      endDate: null,
      status: formData.status,
      assignee: formData.assignee,
      priority: formData.priority,
    };
    dispatch(clearFilteredTasks());
    dispatch(addTask(newTask));
    handleOpen();
    setFormData({
      title: "",
      description: "",
      assignee: "",
      priority: "P1",
    });
  };

  return (
    <div>
      <Button onClick={handleOpen} className="px-3 py-1 min-w-24 bg-blue-950">
        Add Task
      </Button>
      <ToastContainer />
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none w-full flex items-center justify-center p-6  backdrop-blur-md bg-opacity-30 bg-slate-500 h-screen"
      >
        <form onSubmit={handleSubmit} className=" outline-none  md:w-1/3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded resize-none"
            rows="3"
            required
          />
          <select
            name="status"
            value={formData.status || "Pending"}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
          >
            {/* <option value="Pending">Select Status</option> */}
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
            value={formData.assignee}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
            required
          />
          <select
            name="priority"
            value={formData.priority}
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
            <button onClick={handleOpen} className="text-xl text-white">
              X
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default TaskForm;
