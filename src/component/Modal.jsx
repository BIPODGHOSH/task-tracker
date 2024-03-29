import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/todoSlice";

const Modal = ({ task, open, handleShowEdit, handleOpen }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    console.log("Edit button clicked");
    handleShowEdit(task);
    handleOpen();
  };

  const handleDelete = () => {
    console.log("Delete button clicked");
    handleOpen();
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      <div
        className={`fixed  z-50 flex items-center justify-center ${
          open ? "" : "hidden"
        } modal-content`}
      >
        <div className="bg-white p-4 rounded-md shadow-md min-w-[200px]">
          <h2
            className="text-lg font-semibold mb-4 w-20 text-center rounded-md text-white bg-gray-800"
            onClick={handleOpen}
          >
            Close
          </h2>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
