import { createContext, useContext, useMemo, useReducer } from "react";
import { data, taskReducer } from "./taskReducer";

const TasksContext = createContext();
const TasksContextDispatch = createContext();

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, data);

  const value = useMemo(() => {
    return {
      tasks,
      dispatch,
    };
  }, [tasks]);

  return (
    // <TasksContext.Provider value={tasks}>
    <TasksContext.Provider value={value}>
      {/* <TasksContextDispatch.Provider value={dispatch}> */}
      {children}
      {/* </TasksContextDispatch.Provider> */}
    </TasksContext.Provider>
  );
}

export function useTasksR() {
  const tasks = useContext(TasksContext);
  return tasks;
}

export function useTasks() {
  const tasks = useContext(TasksContext);
  return tasks;
}

export function useTasksDispatch() {
  const dispatch = useContext(TasksContextDispatch);
  return dispatch;
}
