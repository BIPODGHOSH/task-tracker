import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-2">Task List</h2>
      <div className="overflow-x-auto">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
