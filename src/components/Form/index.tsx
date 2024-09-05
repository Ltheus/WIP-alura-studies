import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

export default function Form({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) {
  const [task, setTask] = React.useState({
    name: "",
    time: "00:00",
  });

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { ...task, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask({
      name: "",
      time: "",
    });
  };

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          required
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="timer">Tempo</label>
        <input
          type="time"
          step="1"
          name="timer"
          id="timer"
          min="00:00:00"
          required
          value={task.time}
          onChange={(e) => setTask({ ...task, time: e.target.value })}
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
}
