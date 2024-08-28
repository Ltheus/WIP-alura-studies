import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import TimerCard from "../components/TimerCard";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <TimerCard />
    </div>
  );
}

export default App;
