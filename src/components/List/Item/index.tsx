import { ITask } from "../../../types/task";
import style from "../List.module.scss";

interface itemProps {
  task: ITask;
  selectTask: (selectedTask: ITask) => void;
}

export const Item = ({ task, selectTask }: itemProps) => {
  return (
    <li
      className={`${style.listItem} ${
        task.selected ? style.selectedItem : ""
      } ${task.completed ? style.completedItem : ""}`}
      onClick={() => !task.completed && selectTask(task)}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
      {task.completed && (
        <span className={style.done} aria-label="Task completed"></span>
      )}
    </li>
  );
};
