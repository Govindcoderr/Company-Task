import TaskItem from "./TaskItem";

function TaskList({ tasks, filter, toggleTask, deleteTask, updateTask }) {
  // Filter tasks based on the current filter value
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="space-y-4">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg">No tasks found</p>
      )}
    </div>
  );
}

export default TaskList;
