"use client";

import { type FC, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

import styles from "./portfolio.module.scss";

import { TitleSectionBig } from "@/components/reused/common/title-section-big";
import Container from "@/components/reused/container/container";
import { listPortfolio } from "@/screens/home/portfolio-plates/list-portfolio";
import ButtonRound from "@/components/reused/buttons/button-round";
import PortfolioMore from "@/screens/home/portfolio-plates/more/portfolio-more";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);

const PortfolioPlate: FC = () => {
  const [isShowWindow, setIsShowWindow] = useState<number | null>(null);

  return (
    <section className={styles.portfolio}>
      <Container>
        <TitleSectionBig text={"Портфолио"} colorText={"dark"} />
        <ul className={styles.portfolio_list}>
          {listPortfolio.map((item) => (
            <li key={item.id} className={styles.portfolio_item}>
              <Image
                src={item.img}
                alt={"Обработка металла"}
                width={313}
                height={157}
                className={styles.portfolio_image}
              />
              <div className={styles.portfolio_wrapper}>
                <p className={styles.portfolio_subtitle}>Портфолио</p>
                <h4 className={styles.portfolio_title}>{item.title}</h4>
                <p className={styles.portfolio_text}>{item.text}</p>

                <div className={styles.portfolio_wrapBottom}>
                  <ButtonRound
                    text={"Смотреть примеры"}
                    isLink
                    link={item.link}
                  />
                  <button
                    type={"button"}
                    className={styles.portfolio_btn}
                    onClick={() => setIsShowWindow(item.id)}
                  >
                    Узнать больше
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
      <AnimatePresence>
        {isShowWindow && (
          <ModalWindow
            setShowIdx={setIsShowWindow}
            cross={"small"}
            scrollPage={true}
          >
            <PortfolioMore
              data={listPortfolio.find((i) => i.id === isShowWindow) || null}
            />
          </ModalWindow>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioPlate;
