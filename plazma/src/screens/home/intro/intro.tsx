"use client";

import { type FC } from "react";
import { ReactTyped } from "react-typed";
import { animateScroll } from "react-scroll";

import styles from "./intro.module.scss";
import ButtonRound from "@/components/reused/buttons/button-round";
import Container from "@/components/reused/container/container";

const IntroHome: FC = () => {
  return (
    <div className={styles.intro}>
      <Container>
        <div className={styles.intro_inner}>
          <h1 className={styles.intro_title}>Сайт компании ЛЮТАПРО</h1>
          <ReactTyped
            strings={[`Плазменная резка металла в Одессе`]}
            typeSpeed={80}
            backSpeed={40}
            loop={false}
            className={styles.intro_typingText}
          />
          <p className={styles.intro_text}>
            17 лет на рынке! Огромный парк высокоточных станков с ЧПУ
          </p>

          <ButtonRound
            text={"Примеры наших работ"}
            onClick={() => animateScroll.scrollTo(500)}
          />
        </div>
      </Container>
    </div>
  );
};

export default IntroHome;
