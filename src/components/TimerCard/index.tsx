import Button from "../Button";
import Timer from "./Timer";
import style from "./TimerCard.module.scss";

export default function TimerCard() {
  return (
    <div className={style.timerCard}>
      <p className={style.title}>Escolha uma tarefa para iniciar</p>
      <div className={style.timerWrapper}>
        <Timer />
      </div>
      <Button>Iniciar</Button>
    </div>
  );
}
