import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { TasksConxtextType } from "../types";

import AddIcon from "../assets/plus.svg";
import { TodoList } from "../components/TodoList";
import { TasksContext } from "../contexts/TasksContext";

export function Main() {
  const [value, setValue] = useState("");
  const { setData } = useContext<TasksConxtextType>(TasksContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData((prevData) => [
      ...prevData,
      {
        id: uuid(),
        content: value,
        completed: false,
      },
    ]);
    setValue("");
  };

  return (
    <main className="max-w-3xl m-auto">
      <form
        onSubmit={handleSubmit}
        className="-mt-6 flex items-stretch h-12 gap-2 w-full"
      >
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={`px-4 rounded-lg bg-base-gray-500 border border-base-gray-700 placeholder:text-base-gray-300 flex-1 outline-none shadow-lg focus:border-product-purple-dark transition ring-0`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          required
        />
        <button className="px-4 rounded-lg bg-product-blue-dark hover:bg-product-blue transition font-bold text-sm shadow-lg flex items-center gap-2">
          Criar
          <img src={AddIcon} alt="Criar" />
        </button>
      </form>
      <TodoList />
    </main>
  );
}
