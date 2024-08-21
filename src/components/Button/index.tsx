import React, { ReactNode } from "react";
import style from "./Button.module.scss";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <>
      <button className={style.button}>{children}</button>
    </>
  );
}
