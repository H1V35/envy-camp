import { useState, ChangeEvent, FormEvent } from "react";

import { Task } from "../App";
import { nanoid } from "nanoid";

type TaskFormProps = {
  addTask: (task: Task) => void;
};

export function TaskForm({ addTask }: TaskFormProps) {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!task.name?.trim()) return;

    const newTask = {
      id: nanoid(),
      isCompleted: false,
      ...task,
    };

    addTask(newTask);
    setTask({ name: "", description: "" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setTask({ ...task, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit} className="add-task-form">
      <input
        type="text"
        value={task.name}
        onChange={handleInputChange}
        name="name"
        placeholder="Add a task"
        required
      />

      <input
        type="text"
        value={task.description}
        onChange={handleInputChange}
        name="description"
        placeholder="Add a description"
      />

      <button className="add-task-button">Add</button>
    </form>
  );
}
