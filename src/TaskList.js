import React from "react";
import "../src/TaskList.css";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleToggle = (id) => {
    onToggle(id);
  };

  return (
    <div className="tasklist">
      <h3>Task List</h3>
      <div className="task-cards">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            ><input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
              Title: {task.title}
              <br />
              <b>Completed Status:</b> {task.completed ? "Yes" : "No"}
            </span>

            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
