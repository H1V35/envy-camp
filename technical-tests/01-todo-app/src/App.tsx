import { useState } from "react";
import { nanoid } from "nanoid";
import { AddTaskForm } from "./components/AddTaskForm";
import { List } from "./components/List";

export type TaskProps = {
  id?: string;
  name?: string;
  description?: string;
  isCompleted?: boolean;
  toggleCompleteTask?: (id: string) => void;
  deleteTask?: (id: string) => void;
};

const countIncompleteTasks = (list: TaskProps[]) => {
  return list.reduce((count: number, task: TaskProps) => {
    if (!task.isCompleted) {
      return count + 1;
    }
    return count;
  }, 0);
};

export function App() {
  const [task, setTask] = useState<TaskProps>({
    id: "",
    name: "",
    description: "",
    isCompleted: false,
  });
  const [list, setList] = useState<TaskProps[]>([]);

  const addTask = () => {
    const newTask = task;

    if (newTask.name?.length) {
      newTask.id = nanoid();

      setList([...list, newTask]);
      setTask({
        id: "",
        name: "",
        description: "",
        isCompleted: false,
      });
    }
  };

  const toggleCompleteTask = (id: string) => {
    const newList = list.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setList(newList);
  };

  const deleteTask = (id: string) => {
    const newList = list.filter((task) => task.id !== id);

    setList(newList);
  };

  const clearCompletedTasks = () => {
    const newList = list.filter((task) => !task.isCompleted);

    setList(newList);
  };

  return (
    <main className="container">
      <section className="todo">
        <h1 className="title">Todo App</h1>

        <AddTaskForm task={task} setTask={setTask} addTask={addTask} />
      </section>

      <section>
        <List
          list={list}
          toggleCompleteTask={toggleCompleteTask}
          deleteTask={deleteTask}
        />
      </section>

      <footer>
        <p className="tasks-remaining">
          {`${countIncompleteTasks(list)} ${
            countIncompleteTasks(list) === 1 ? "task" : "tasks"
          } remaining`}
        </p>

        {list.find((task) => task.isCompleted === true) && (
          <button onClick={clearCompletedTasks} className="clear-task-button">
            Clear Completed
          </button>
        )}
      </footer>
    </main>
  );
}
