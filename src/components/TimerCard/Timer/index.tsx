import style from "./Timer.module.scss";

interface timerProps {
  time: number | undefined;
}

export const Timer = ({ time = 0 }: timerProps) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minTen, minOne] = String(minutes).padStart(2, "0");
  const [secTen, secOne] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.timerNumber}>{minTen}</span>
      <span className={style.timerNumber}>{minOne}</span>
      <span className={style.timerDivision}>:</span>
      <span className={style.timerNumber}>{secTen}</span>
      <span className={style.timerNumber}>{secOne}</span>
    </>
  );
};
