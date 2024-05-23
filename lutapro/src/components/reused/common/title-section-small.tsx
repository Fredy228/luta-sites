import { type FC } from "react";

import styles from "./common.module.scss";

type PropsTitle = {
  text: string;
};
export const TitleSectionSmall: FC<PropsTitle> = ({ text }) => {
  return <h2 className={styles.title_small}>{text}</h2>;
};

type PropsSubtitle = {
  text: string;
};
export const SubtitleSectionSmall: FC<PropsSubtitle> = ({ text }) => {
  return <h2 className={styles.subtitle_small}>{text}</h2>;
};
