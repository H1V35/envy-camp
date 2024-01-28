import trashCan from "../assets/icons/trash-can.svg";
import check from "../assets/icons/check.svg";
import checked from "../assets/icons/checked.svg";
import { TaskProps } from "../App";

export function Task({
  id = "",
  name = "Task name",
  description = "Description",
  isCompleted = true,
  toggleCompleteTask = () => {},
  deleteTask = () => {},
}: TaskProps) {
  return (
    <li className="task">
      <button
        onClick={() => toggleCompleteTask(id)}
        className={`complete-task-button ${isCompleted && "task-completed"}`}
      >
        <img
          src={isCompleted ? checked : check}
          alt={isCompleted ? "Checked icon" : "Check icon"}
          className="check"
        />
        {name}
      </button>

      <button onClick={() => deleteTask(id)} className="trash-can-button">
        <img src={trashCan} alt="Trash can" className="trash-can-icon" />
      </button>

      <p>{description}</p>
    </li>
  );
}
