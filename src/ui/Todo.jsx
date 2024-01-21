import { useState } from "react";
import { useTasks, useTasksDispatch, useTasksR } from "../context/TasksContext";

export default function Todo() {
  console.log(444444);
  return (
    <div>
      <AddTask />

      <TaskList />
    </div>
  );
}

function AddTask() {
  const [value, setValue] = useState("");
  // const dispatch = useTasksDispatch();
  const { dispatch } = useTasksR();
  console.log(value, 222);

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;

    dispatch({ type: "addTask", payload: value });
    // setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

function TaskList() {
  // const tasks = useTasks();
  const { tasks } = useTasksR();
  console.log(tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.text);

  // const dispatch = useTasksDispatch();
  const { dispatch } = useTasksR();

  return (
    <li className="bg-red-400 flex gap-2 items-center mb-2">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          dispatch({
            type: "editTask",
            payload: { ...task, done: e.target.checked },
          })
        }
      />
      {/* Input Or Text */}
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch({ type: "editTask", payload: { ...task, text: value } });
              setIsEditing(false);
            }
          }}
        />
      ) : (
        <p>{task.text}</p>
      )}
      <button
        disabled={task.done}
        onClick={() => {
          if (isEditing) {
            dispatch({ type: "editTask", payload: { ...task, text: value } });
            setIsEditing(false);
          } else {
            setIsEditing(true);
          }
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>

      <button
        onClick={() => dispatch({ type: "deleteTask", payload: task.id })}
      >
        Delete
      </button>
    </li>
  );
}
