"use client";

import { type FC } from "react";
import { ReactTyped } from "react-typed";

import styles from "./intro.module.scss";
import ButtonRound from "@/components/reused/buttons/button-round";

const IntroHome: FC = () => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.intro_title}>Сайт компании ЛЮТАПРО</h1>
      <ReactTyped
        strings={[
          `Занимаемся фрезеровкой на ЧПУ`,
          `Плазменной резкой`,
          `Лазерной резкой`,
        ]}
        typeSpeed={80}
        backSpeed={40}
        loop
        className={styles.intro_typingText}
      />
      <p className={styles.intro_text}>
        17 лет на рынке! Огромный парк высокоточных станков с ЧПУ
      </p>

      <ButtonRound text={"Примеры наших работ"} onClick={() => ""} />
    </div>
  );
};

export default IntroHome;
