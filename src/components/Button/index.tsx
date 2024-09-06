import React, { ReactNode } from "react";
import style from "./Button.module.scss";

interface buttonProps {
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const Button = (props: buttonProps) => {
  return (
    <>
      <button
        onClick={props.onClick}
        type={props.type}
        className={style.button}
      >
        {props.children}
      </button>
    </>
  );
};
