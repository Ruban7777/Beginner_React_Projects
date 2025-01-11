import React, { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

  // Handle input change
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  // Add task to "To-Do" section
  const handleSubmit = () => {
    if (task.trim() !== "") {
      setTasklist((prevTasks) => ({
        ...prevTasks,
        todo: [...prevTasks.todo, task],
      }));
      setTask("");
    }
  };

  // Move task to another category
  const moveTask = (currentCategory, targetCategory, taskToMove) => {
    setTasklist((prevTasks) => {
      // Remove task from current category
      const updatedCurrent = prevTasks[currentCategory].filter(
        (t) => t !== taskToMove
      );
      // Add task to target category
      const updatedTarget = [...prevTasks[targetCategory], taskToMove];
      return {
        ...prevTasks,
        [currentCategory]: updatedCurrent,
        [targetCategory]: updatedTarget,
      };
    });
  };

  // clear Tasks
  const clearTask = (category) => {
    setTasklist((prevTasklist) => {
      return {
        ...prevTasklist,
        [category]: [], // Assuming tasklist is an object with categories as keys
      };
    });
  };

  return (
    <>
      <form
        className="task-form"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form reload
          handleSubmit();
        }}
      >
        <div className="add">
          <input
            type="text"
            placeholder="Enter your tasks here...."
            name="task"
            value={task}
            onChange={handleInputChange} // Pass function reference
          />
          <button type="submit" className="addbtn">
            ADD TASK
          </button>
        </div>
      </form>
      <div className="tasks">
        <div className="todo">
          <h2>To-Do Tasks</h2>
          <ul>
            {tasklist.todo.map((t, index) => (
              <li key={index}>
                {t}
                <button onClick={() => moveTask("todo", "ongoing", t)}>
                  Ongoing
                </button>
                <button onClick={() => moveTask("todo", "completed", t)}>
                  Completed
                </button>
              </li>
            ))}
          </ul>
          {/* <button className="clear" onClick={() => clearTask("todo")}>
            Clear All
          </button> */}
        </div>
        <div className="ongoing">
          <h2>Ongoing Tasks</h2>
          <ul>
            {tasklist.ongoing.map((t, index) => (
              <li key={index}>
                {t}
                <button onClick={() => moveTask("ongoing", "todo", t)}>
                  To do
                </button>
                <button onClick={() => moveTask("ongoing", "completed", t)}>
                  Completed
                </button>
              </li>
            ))}
          </ul>
          {/* <button className="clear" onClick={() => clearTask("ongoing")}>Cl</button> */}
        </div>
        <div className="completed">
          <h2>Completed Tasks</h2>
          <ul>
            {tasklist.completed.map((t, index) => (
              <li key={index}>
                {t}
                <button onClick={() => moveTask("completed", "todo", t)}>
                  To do
                </button>
                <button onClick={() => moveTask("completed", "ongoing", t)}>
                  Ongoing
                </button>
              </li>
            ))}
          </ul>
          {/* <button className="clear" onClick={() => clearTask("completed")}>Clear All</button> */}
        </div>
      </div>
    </>
  );
}
