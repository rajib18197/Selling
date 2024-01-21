import TasksProvider from "../context/TasksContext";
import Todo from "./Todo";

export default function TasksApp() {
  console.log("root");
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
}
