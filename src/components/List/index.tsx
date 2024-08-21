import React from "react";

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
    <aside>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
