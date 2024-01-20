import { useState } from "react";

const data = [
  { id: 1, text: "Learn React JS", done: true },
  { id: 2, text: "Learn Next JS", done: false },
  { id: 3, text: "Learn Node JS", done: false },
];

const getNextId = function (data) {
  const maxId = data.reduce(
    (acc, cur) => (acc > cur.id ? acc : cur.id),
    data[0].id
  );
  console.log(maxId);

  return maxId + 1;
};

export default function Todo() {
  const [tasks, setTasks] = useState(data);

  function handleAddTask(text) {
    setTasks((curTasks) => [
      ...curTasks,
      { id: getNextId(curTasks), text, done: false },
    ]);
  }

  function handleChangeTask(newTask) {
    setTasks((curTasks) =>
      curTasks.map((task) =>
        task.id === newTask.id ? { ...newTask } : { ...task }
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks((curTasks) => curTasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <AddTask onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onEditTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

function AddTask({ onAddTask }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;

    onAddTask(value);
    setValue("");
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

function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

function Task({ task, onEditTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.text);

  return (
    <li className="bg-red-400 flex gap-2 items-center mb-2">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => onEditTask({ ...task, done: e.target.checked })}
      />
      {/* Input Or Text */}
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEditTask({ ...task, text: value });
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
            onEditTask({ ...task, text: value });
            setIsEditing(false);
          } else {
            setIsEditing(true);
          }
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>

      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}
