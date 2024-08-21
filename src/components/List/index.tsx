import React from "react";
import style from "./List.module.scss";
import Item from "./Item";

export default function List() {
  const tasks = [
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "React",
      time: "02:00:00",
    },
  ];

  return (
    <aside className={style.taskList}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
