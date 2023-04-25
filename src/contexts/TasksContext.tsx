import { createContext } from "react";
import { TasksConxtextType } from "../types";

export const TasksContext = createContext<TasksConxtextType>({
  data: [],
  setData: () => {},
});
