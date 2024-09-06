import { useEffect, useState } from "react";
import { ITask } from "../../types/task";
import { timeToSeconds } from "../../utils/date";
import { Button } from "../Button";
import { Timer } from "./Timer";
import style from "./TimerCard.module.scss";

interface timerCardProps {
  selectedTask: ITask | undefined;
  completeTask: () => void;
}

export const TimerCard = (props: timerCardProps) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (props.selectedTask?.time) {
      setTime(timeToSeconds(props.selectedTask.time));
    }
  }, [props.selectedTask?.selected, props.selectedTask?.time]);

  const countdown = (timer: number = 0) => {
    setTimeout(() => {
      if (timer > 0) {
        setTime(timer - 1);
        return countdown(timer - 1);
      }
      props.completeTask();
    }, 1000);
  };

  return (
    <div className={style.timerCard}>
      <p className={style.title}>Escolha uma tarefa para iniciar</p>
      <div className={style.timerWrapper}>
        <Timer time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Começar</Button>
    </div>
  );
};
