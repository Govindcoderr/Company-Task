import { useState } from "react";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

function TaskItem({ task, toggleTask, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskName, setEditTaskName] = useState(task.name);

  const handleSave = () => {
    updateTask(task.id, editTaskName);
    setIsEditing(false);
  };

  return (
    <Card className="flex items-center justify-between transition-transform hover:scale-[1.02]">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        {isEditing ? (
          <Input
            value={editTaskName}
            onChange={(e) => setEditTaskName(e.target.value)}
            className="w-64"
            onKeyPress={(e) => e.key === "Enter" && handleSave()}
            onBlur={handleSave}
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className={`cursor-pointer text-lg font-medium ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.name}
          </span>
        )}
        <Badge category={task.category}>{task.category}</Badge>
      </div> 
      <Button variant="destructive" onClick={() => deleteTask(task.id)}> 
        Delete
      </Button>
    </Card>
  );
}

export default TaskItem;