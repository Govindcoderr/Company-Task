import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import { Card } from "./components/ui/Card";

// Categories for the task dropdown 
const categories = [
  { value: "Work", label: "Work" },
  { value: "Personal", label: "Personal" },
  { value: "Shopping", label: "Shopping" },
  { value: "Others", label: "Others" },
];

function App() {
  // State for tasks, input, category, and filter
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("Work");
  const [filter, setFilter] = useState("all"); 

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);


  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  // Add a new task
  const addTask = () => {
    if (!taskName.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: taskName,
        category,
        completed: false,
      },
    ]);
    setTaskName("");
    setCategory("Work");
  };

  // Delete a task by ID
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Update task name
  const updateTask = (id, newName) => {
    if (!newName.trim()) return;
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name: newName } : task))
    );
  };

  // Calculate task counts for filter tabs
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  // Dynamic tabs with counts
  const tabs = [
    { value: "all", label: `All Tasks (${totalTasks})` },
    { value: "completed", label: `Completed Tasks (${completedTasks})` },
    { value: "pending", label: `Pending Tasks (${pendingTasks})` },
  ];

  // Filter tasks based on the selected tab

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  // Log filter state for debugging (remove in production)
  // console.log("Current filter:", filter);
  // console.log("Filtered tasks:", filteredTasks);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-blue-50 to-blue-100 p-10">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-blue-900 text-center tracking-wide mb-10 drop-shadow-sm">
        My Task
      </h1>

      <div className="w-full max-w-2xl space-y-8">
        {/* Task Form */}
        <Card className="shadow-xl border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-2xl transition">
          <TaskForm
            taskName={taskName}
            setTaskName={setTaskName}
            category={category}
            setCategory={setCategory}
            categories={categories}
            addTask={addTask}
          />
        </Card>

        {/* Task Filters */}
        <div className="flex justify-center">
          <TaskFilters filter={filter} setFilter={setFilter} tabs={tabs} />
        </div>

        {/* Task List */}
        <Card className="shadow-xl border border-gray-200 rounded-2xl p-6 bg-white">
          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </Card>
      </div>
    </div>

  );
}

export default App;