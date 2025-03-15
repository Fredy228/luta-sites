"use client";

import { type FC, useState } from "react";
import Image from "next/image";

import styles from "./calc-order.module.scss";

import Container from "@/components/reused/container/container";
import ButtonRound from "@/components/reused/buttons/button-round";

import imgBg from "@/../public/img/calc-orders/calc-orders-bg.webp";
import imgCalcOrders from "@/../public/img/calc-orders/calc-orders.webp";
import { CalcOrderList } from "@/screens/home/calc-orders/calc-order-list";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import SendForm from "@/components/ui/send-form/send-form";

const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);

const CalcOrder: FC = () => {
  const [isShowWindow, setIsShowWindow] = useState<boolean>(false);
  return (
    <section
      className={styles.calcOrder}
      // style={{ backgroundImage: `url(${imgBg.src})` }}
    >
      <Container>
        <div className={styles.calcOrder_inner}>
          <div className={styles.calcOrder_wrapInfo}>
            <h3 className={styles.calcOrder_title}>
              Стоимость услуги плазменной резки металла толщиной от 1 мм до 25
              мм
            </h3>
            <p className={styles.calcOrder_text}>
              Резка металлов и сплавов отличных от обычной (Сталь3) +25% к
              прайс-листу. Пробивку отверстия производим до толщины металла 16
              мм. Размер рабочего стола 1,5 х 3 метра. Минимальный заказ - 600
              грн.
            </p>
            <h4 className={styles.calcOrder_decrip}>Толщина металла в мм</h4>
            <ul className={styles.calcOrder_list}>
              {CalcOrderList.map((item) => (
                <li key={item.id} className={styles.calcOrder_item}>
                  <span className={styles.calcOrder_name}>{item.name}</span>
                  <span className={styles.calcOrder_space}></span>
                  {item.price === undefined && (
                    <span className={styles.calcOrder_noPrice}>договорная</span>
                  )}
                  {item.price === null && (
                    <span className={styles.calcOrder_noPrice}>бесплатно</span>
                  )}
                  {item.price && (
                    <span className={styles.calcOrder_price}>{item.price}</span>
                  )}
                </li>
              ))}
            </ul>
            <ButtonRound
              text={"Жми если есть вопросы"}
              onClick={() => setIsShowWindow(true)}
            />
          </div>
          <div className={styles.calcOrder_wrapImage}>
            <Image
              className={styles.calcOrder_image}
              src={imgCalcOrders.src}
              alt={"Расчет плазменной резки"}
              width={351}
              height={500}
              quality={100}
            />
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isShowWindow && (
          <ModalWindow setShow={setIsShowWindow} cross={"small"}>
            <SendForm
              title={"ОБРАТНЫЙ ЗВОНОК"}
              text={"Мы свяжемся с вами в ближайшее время"}
              tag={"#Как мы считаем заказы"}
            />
          </ModalWindow>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CalcOrder;
