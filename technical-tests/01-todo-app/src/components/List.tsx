import { Task } from "./Task";
import { TaskProps } from "../App";

type ListProps = {
  list: TaskProps[];
  toggleCompleteTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export function List({ list, toggleCompleteTask, deleteTask }: ListProps) {
  return (
    <ul>
      {!list.length ? (
        <Task />
      ) : (
        list.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              description={task.description}
              isCompleted={task.isCompleted}
              toggleCompleteTask={toggleCompleteTask}
              deleteTask={deleteTask}
            />
          );
        })
      )}
    </ul>
  );
}
