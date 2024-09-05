import { ITask } from "../../../types/task";
import style from "../List.module.scss";

interface itemProps {
  task: ITask;
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({ task, selectTask }: itemProps) {
  return (
    <li
      className={`${style.listItem} ${task.selected ? style.selectedItem : ""}`}
      onClick={() => selectTask(task)}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
    </li>
  );
}
