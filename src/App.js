import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import "../src/App.css"
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return filter === "completed" ? task.completed : !task.completed;
  });

  return (
    <div>
      <h1>React Task Tracker</h1>
      <AddTaskForm onAdd={addTask} />
      <div>
        <label className="filter">
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
      </div>
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </div>
  );
};

export default App;
