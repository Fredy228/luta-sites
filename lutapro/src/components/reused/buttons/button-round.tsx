"use client";

import { type FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./buttons.module.scss";

type Props = {
  type?: "button" | "submit";
  text: string;
  onClick?: () => any;
  version?: "color" | "grey";
  style?: Record<string, string>;
  isLoading?: boolean;
};
const ButtonRound: FC<Props> = ({
  type = "button",
  text,
  onClick,
  version = "color",
  style = {},
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      style={style}
      className={`${styles.btn_round} ${version === "color" ? styles.color : styles.grey}`}
      onClick={onClick}
    >
      {isLoading ? <CircularProgress /> : text}
    </button>
  );
};

export default ButtonRound;
