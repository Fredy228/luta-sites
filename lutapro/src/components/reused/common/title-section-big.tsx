import { type FC } from "react";

import styles from "./common.module.scss";

type PropsTitle = {
  text: string;
  colorText?: "light" | "dark";
};
export const TitleSectionBig: FC<PropsTitle> = ({
  text,
  colorText = "dark",
}) => {
  return (
    <h2
      className={`${styles.title_big} ${colorText === "light" ? styles.light : styles.dark}`}
    >
      {text}
    </h2>
  );
};

type PropsSubtitle = {
  text: string;
  colorText?: "light" | "dark";
};
export const SubtitleSectionBig: FC<PropsSubtitle> = ({
  text,
  colorText = "dark",
}) => {
  return (
    <h2
      className={`${styles.subtitle_big} ${colorText === "light" ? styles.light : styles.dark}`}
    >
      {text}
    </h2>
  );
};
