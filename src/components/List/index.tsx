import React from "react";
import style from "./List.module.scss";
import { Item } from "./Item";
import { ITask } from "../../types/task";

interface taskProps {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

export const List = ({ tasks, selectTask }: taskProps) => {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} task={item} />
        ))}
      </ul>
    </aside>
  );
};
