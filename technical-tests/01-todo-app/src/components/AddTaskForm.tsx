import { TaskProps } from "../App";

type AddTaskFormProps = {
  task: TaskProps;
  setTask: React.Dispatch<React.SetStateAction<TaskProps>>;
  addTask: () => void;
};

export function AddTaskForm({ task, setTask, addTask }: AddTaskFormProps) {
  return (
    <form className="add-task-form">
      <input
        type="text"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        name="name"
        id="name"
        placeholder="Add a task"
        required
      />

      <input
        type="text"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        name="description"
        id="description"
        placeholder="Add a description"
      />

      <button onClick={addTask} className="add-task-button">
        Add
      </button>
    </form>
  );
}
