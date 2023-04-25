import React from "react";

export type DataTypes = {
  id: string;
  completed: boolean;
  content: string;
};

export interface TasksConxtextType {
  data: DataTypes[];
  setData: React.Dispatch<React.SetStateAction<DataTypes[]>>;
}
