import { Main } from "./layout/Main";

import Logo from "./assets/logo.svg";
import { useEffect, useState } from "react";
import { DataTypes } from "./types";
import { TasksContext } from "./contexts/TasksContext";

function App() {
  const [data, setData] = useState<DataTypes[]>(
    JSON.parse(localStorage.getItem("data") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <TasksContext.Provider value={{ data, setData }}>
      <div className="min-h-screen pb-12 bg-base-gray-600 text-base-gray-100">
        <header className="h-[200px] bg-base-gray-700 flex justify-center items-center">
          <img src={Logo} alt="To Do Logo" />
        </header>
        <Main />
      </div>
    </TasksContext.Provider>
  );
}

export default App;
