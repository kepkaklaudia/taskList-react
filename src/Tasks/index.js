import "./style.css"

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`tasksList ${task.done && hideDoneTasks ? "tasksList--hidden" : ""}`}
      >
        <button className="task__button task__button--toggleDone">
          {task.done ? "✓" : ""}
        </button>
        <span className={`taskContent ${task.done ? " taskContent--done" : ""}`}>
          {task.content}
        </span>
        <button className="task__button task__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul >
);

export default Tasks;