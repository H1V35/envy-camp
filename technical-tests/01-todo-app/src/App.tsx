import trashCan from "./assets/icons/trash-can.svg";
import check from "./assets/icons/check.svg";
import checked from "./assets/icons/checked.svg";

export function App() {
  return (
    <main className="container">
      <section className="todo">
        <h1 className="title">Todo App</h1>

        <form method="post" action="/" className="add-task-form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Add a task"
            required
          />

          <input
            type="text"
            name="description"
            id="description"
            placeholder="Add a description"
          />
        </form>

        <button className="add-task-button">Add</button>
      </section>

      <section>
        <article className="placeholder">
          <button className="complete-task-button">
            <img src={check} alt="Trash can" className="trash-can-icon" />
            Task name
          </button>

          <button className="trash-can-button">
            <img src={trashCan} alt="Trash can" className="trash-can-icon" />
          </button>

          <p>Description</p>
        </article>
      </section>

      <footer>
        <p className="tasks-remaining">X task remaining</p>

        <button className="clear-task-button">Clear Completed</button>
      </footer>
    </main>
  );
}
