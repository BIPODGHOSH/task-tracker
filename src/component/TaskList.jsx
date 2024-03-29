import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import UpdateForm from "./UpdateForm";
import { useDispatch } from "react-redux";
import { clearFilteredTasks } from "../store/todoSlice";
import Modal from "./Modal";

const TaskList = ({ tasks, back }) => {
  const [openModalId, setOpenModalId] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [forUpdateTask, setForUpdateTask] = useState(null);
  const dispatch = useDispatch();

  const handleOpen = (id) => {
    setOpenModalId(id);
    setOpen(!open);
  };
  const handleShowEdit = (newTask) => {
    setForUpdateTask(newTask);
    setShowEdit(!showEdit);
  };
  console.log(open);

  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = [];
    }
    acc[task.status].push(task);
    return acc;
  }, {});
  console.log(tasks);

  const handleBack = () => {
    dispatch(clearFilteredTasks());
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-2 p-0 m-0 overflow-x-scroll justify-evenly w-full scrollbar">
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <Card
            key={status}
            className="mb-4 min-w-40 md:w-56 bg-white overflow-hidden rounded-xl "
          >
            <CardHeader
              className={` font-bold text-center py-1 text-white ${
                status === "Pending"
                  ? "bg-gray-400"
                  : status === "In Progress"
                  ? " bg-yellow-600"
                  : status === "Completed"
                  ? " bg-green-600"
                  : status === "Deployed"
                  ? " bg-blue-800"
                  : status === "Deferred" && " bg-red-300"
              } rounded-none m-0`}
            >
              {status}
            </CardHeader>
            <CardBody className="p-0 overflow-auto flex flex-col px-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-slate-200 my-2 rounded-md px-2 flex flex-col gap-5 py-2"
                >
                  <div className="flex justify-between items-center">
                    <p className=" text-xl font-semibold">{task.title}</p>
                    <p className="p-1 text-white rounded-sm bg-blue-700 ">
                      {task.priority}
                    </p>
                  </div>
                  <hr className="w-full h-[2px]  bg-slate-800" />
                  <p>{task.description}</p>
                  <div className="flex justify-between items-center">
                    <p className=" font-semibold">@{task.assignee}</p>
                    <CiMenuKebab
                      className=" cursor-pointer"
                      onClick={() => handleOpen(task.id)}
                    />
                  </div>
                  <h1 className="bg-blue-500 px-2 max-w-[120px] py-1 text-center rounded-md text-white">
                    {task.status === "Pending" ? "Assign" : task.status}
                  </h1>
                  {open && task.id === openModalId && (
                    // <UpdateForm task={task} handleModal={handleModal} />
                    <Modal
                      task={task}
                      handleShowEdit={handleShowEdit}
                      open={open}
                      handleOpen={handleOpen}
                    />
                  )}
                  {showEdit && (
                    <UpdateForm
                      task={forUpdateTask}
                      open={showEdit}
                      handleModal={handleShowEdit}
                      update={true}
                    />
                  )}
                </div>
              ))}
            </CardBody>
          </Card>
        ))}
      </div>
      {back && (
        <button
          className=" px-2 bg-blue-500 rounded-md text-center py-1 text-white m-auto cursor-pointer"
          onClick={handleBack}
        >
          Back To Home
        </button>
      )}
    </div>
  );
};

export default TaskList;
