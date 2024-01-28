import { TaskListItem } from "./TaskListItem";
import { Task } from "../App";

type TaskListProps = {
  taskList: Task[];
  toggleCompleteTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

const mockedTask = {
  name: "Task name",
  description: "Description",
  id: "id",
  isCompleted: true,
};

export function TaskList({
  taskList,
  toggleCompleteTask,
  deleteTask,
}: TaskListProps) {
  return (
    <ul>
      {!taskList.length ? (
        <TaskListItem task={mockedTask} />
      ) : (
        taskList.map((task) => {
          return (
            <TaskListItem
              key={task.id}
              task={task}
              toggleCompleteTask={toggleCompleteTask}
              deleteTask={deleteTask}
            />
          );
        })
      )}
    </ul>
  );
}
