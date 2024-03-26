import React, { useState } from "react";

const Filter = ({ filterTasks }) => {
  const [filters, setFilters] = useState({
    assignee: "",
    priority: "",
    startDateFrom: "",
    startDateTo: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterTasks(filters);
  };

  return (
    <div className="w-full md:flex  mb-4 lg:mb-0 gap-5">
      <h2 className="text-lg font-bold mb-2">Filter By : </h2>
      <form onSubmit={handleSubmit} className="md:flex gap-2 justify-center">
        <input
          type="text"
          name="assignee"
          placeholder="Assignee"
          value={filters.assignee}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
        />
        <select
          name="priority"
          value={filters.priority}
          onChange={handleChange}
          className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
        >
          <option value="">Select Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        <input
          type="date"
          name="startDateFrom"
          value={filters.startDateFrom}
          onChange={handleChange}
          className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
        />
        {/* <input
          type="date"
          name="startDateTo"
          value={filters.startDateTo}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
        /> */}
        <button
          type="submit"
          className=" max-h-10 py-0 w-full min-w-32 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default Filter;
