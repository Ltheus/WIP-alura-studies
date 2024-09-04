import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import TimerCard from "../components/TimerCard";
import { ITask } from "../types/task";

function App() {
  const [tasks, setTasks] = React.useState<ITask[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <TimerCard />
    </div>
  );
}

export default App;
