import { Input } from "./ui/Input";
import { Select } from "./ui/Select";
import { Button } from "./ui/Button";

function TaskForm({ taskName, setTaskName, category, setCategory, categories, addTask }) {
  return (
    <div className="flex space-x-2 items-end">
      <div className="flex-1">
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter Task name"
          className="w-full"
        />
      </div>
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={categories}
        className="w-25"
      />
      <Button onClick={addTask}>Add Task</Button>
    </div>
  );
}

export default TaskForm;