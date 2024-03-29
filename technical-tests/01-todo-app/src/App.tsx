import { useEffect, useState } from "react";

import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

export type Task = {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
};

const loadTaskListFromStorage = () => {
  const taskListFromStorage = window.localStorage.getItem("taskList");

  return taskListFromStorage ? JSON.parse(taskListFromStorage) : [];
};

export function App() {
  const [taskList, setTaskList] = useState<Task[]>(() =>
    loadTaskListFromStorage()
  );

  const incompletedTasks = taskList.filter((task) => !task.isCompleted).length;

  const hasCompletedTasks = taskList.some((task) => task.isCompleted);

  const addTask = (newTask: Task) => {
    setTaskList([...taskList, newTask]);
  };

  const toggleCompleteTask = (id: string) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const clearCompletedTasks = () => {
    setTaskList(taskList.filter((task) => !task.isCompleted));
  };

  useEffect(() => {
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <main className="container">
      <section className="todo">
        <h1 className="title">Todo App</h1>
        <TaskForm addTask={addTask} />
      </section>

      <section>
        <TaskList
          taskList={taskList}
          toggleCompleteTask={toggleCompleteTask}
          deleteTask={deleteTask}
        />
      </section>

      <footer>
        <p className="tasks-remaining">
          {incompletedTasks} task{incompletedTasks !== 1 && "s"} remaining
        </p>

        {hasCompletedTasks && (
          <button onClick={clearCompletedTasks} className="clear-task-button">
            Clear Completed
          </button>
        )}
      </footer>
    </main>
  );
}
