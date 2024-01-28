import trashCan from "../assets/icons/trash-can.svg";
import check from "../assets/icons/check.svg";
import checked from "../assets/icons/checked.svg";
import { Task } from "../App";

type TaskListItemProps = {
  task: Task;
  toggleCompleteTask?: (id: string) => void;
  deleteTask?: (id: string) => void;
};

export function TaskListItem({
  task: { id, name, description, isCompleted },
  toggleCompleteTask,
  deleteTask,
}: TaskListItemProps) {
  return (
    <li className={`task ${id === "id" && "placeholder"}`}>
      <button
        onClick={() => toggleCompleteTask?.(id)}
        className={`complete-task-button ${isCompleted && "task-completed"}`}
      >
        <img
          src={isCompleted ? checked : check}
          alt={isCompleted ? "Checked icon" : "Check icon"}
          className="check"
        />
        <span>{name}</span>
      </button>

      <button onClick={() => deleteTask?.(id)} className="trash-can-button">
        <img src={trashCan} alt="Trash can" className="trash-can-icon" />
      </button>

      <p>{description}</p>
    </li>
  );
}
