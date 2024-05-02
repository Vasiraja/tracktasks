import React, { useState } from "react";
import '../src/AddTaskForm.css'
const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title });
    setTitle("");
  };

  return (
      <form onSubmit={handleSubmit} >
          <textarea
            className="inputbox"
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="add">+</button>
    </form>
  );
};

export default AddTaskForm;
