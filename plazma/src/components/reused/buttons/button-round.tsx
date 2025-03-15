"use client";

import { type FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./buttons.module.scss";
import Link from "next/link";

type Props = {
  type?: "button" | "submit";
  text: string;
  onClick?: () => any;
  version?: "color" | "grey";
  style?: Record<string, string>;
  isLoading?: boolean;
  isLink?: boolean;
  link?: string;
};
const ButtonRound: FC<Props> = ({
  type = "button",
  text,
  onClick,
  version = "color",
  style = {},
  isLoading = false,
  isLink = false,
  link,
}) => {
  if (isLink && link)
    return (
      <Link
        style={style}
        className={`${styles.btn_round} ${version === "color" ? styles.color : styles.grey}`}
        href={link}
      >
        {text}
      </Link>
    );

  return (
    <button
      type={type}
      style={style}
      className={`${styles.btn_round} ${version === "color" ? styles.color : styles.grey}`}
      onClick={onClick}
    >
      {isLoading ? <CircularProgress size={18} color={"info"} /> : text}
    </button>
  );
};

export default ButtonRound;
