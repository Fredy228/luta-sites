"use client";

import { type FC, useState } from "react";
import dynamic from "next/dynamic";
import { Element } from "react-scroll";
import { AnimatePresence } from "framer-motion";

import styles from "./price-list.module.scss";

import Container from "@/components/reused/container/container";

import imgBg from "@/../public/img/price-list/price-list-bg.webp";
import {
  SubtitleSectionBig,
  TitleSectionBig,
} from "@/components/reused/common/title-section-big";
import { listPrice } from "@/screens/home/price-list/list-price";
import ButtonRound from "@/components/reused/buttons/button-round";
import SendForm from "@/components/ui/send-form/send-form";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);

const PriceList: FC = () => {
  const [isShowWindow, setIsShowWindow] = useState<boolean>(false);

  return (
    <Element name={"price"}>
      <section
        className={styles.priceList}
        style={{
          backgroundImage: `url(${imgBg.src})`,
        }}
      >
        <Container>
          <div className={styles.priceList_inner}>
            <TitleSectionBig
              text={"Прайс-лист на услуги компании ЛЮТАПРО"}
              colorText={"light"}
            />

            <SubtitleSectionBig
              text={
                'Для получения прайс-листа надо нажать на кнопку "получить прайс-лист"'
              }
              colorText={"light"}
            />

            <ul className={styles.priceList_list}>
              {listPrice.map((item) => (
                <li className={styles.priceList_item} key={item.id}>
                  <h4 className={styles.priceList_title}>{item.title}</h4>
                  <p className={styles.priceList_text}>{item.text}</p>

                  <ul className={styles.priceList_materialList}>
                    {item.materials.map((material, idx) => (
                      <li className={styles.priceList_materialItem} key={idx}>
                        {material}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.priceList_wrapBottom}>
                    <span className={styles.priceList_cost}>{item.cost}</span>
                    <ButtonRound
                      text={"Получить прайс-лист"}
                      onClick={() => setIsShowWindow(true)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <AnimatePresence>
          {isShowWindow && (
            <ModalWindow
              setShow={setIsShowWindow}
              scrollPage={true}
              cross={"small"}
            >
              <SendForm
                title={"ПОЛУЧИТЬ ПРАЙС ЛИСТ"}
                text={"Мгновенно отправляется Вам на почту"}
                tag={"#Получить прайс-лист"}
              />
            </ModalWindow>
          )}
        </AnimatePresence>
      </section>
    </Element>
  );
};

export default PriceList;
