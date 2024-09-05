import { useEffect, useState } from "react";
import { ITask } from "../../types/task";
import { timeToSeconds } from "../../utils/date";
import Button from "../Button";
import Timer from "./Timer";
import style from "./TimerCard.module.scss";

interface timerCardProps {
  selectedTask: ITask | undefined;
}

export default function TimerCard(props: timerCardProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (props.selectedTask?.time) {
      setTime(timeToSeconds(props.selectedTask.time));
    }
  }, [props.selectedTask?.selected]);

  return (
    <div className={style.timerCard}>
      <p className={style.title}>Escolha uma tarefa para iniciar</p>
      <p className={style.title}>{time}</p>
      <div className={style.timerWrapper}>
        <Timer />
      </div>
      <Button>Iniciar</Button>
    </div>
  );
}
