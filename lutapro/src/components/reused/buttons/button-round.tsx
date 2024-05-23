"use client";

import { type FC } from "react";

import styles from "./buttons.module.scss";

type Props = {
  type?: "button" | "submit";
  text: string;
  onClick?: () => any;
  version?: "color" | "grey";
  style?: Record<string, string>;
};
const ButtonRound: FC<Props> = ({
  type = "button",
  text,
  onClick,
  version = "color",
  style = {},
}) => {
  return (
    <button
      type={type}
      style={style}
      className={`${styles.btn_round} ${version === "color" ? styles.color : styles.grey}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonRound;
