"use client";

import { type FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Element } from "react-scroll";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

import styles from "./our-machines.module.scss";
import "swiper/scss/navigation";
import "swiper/scss";

import Container from "@/components/reused/container/container";
import imgBg from "@/../public/img/our-machines/our-machine-bg.webp";
import { listOurMachines } from "@/screens/home/our-machines/list-our-machines";
import { IconArrowRight } from "@/components/reused/icon/icon";
import ButtonRound from "@/components/reused/buttons/button-round";
import { TitleSectionBig } from "@/components/reused/common/title-section-big";
import SendForm from "@/components/ui/send-form/send-form";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);

SwiperCore.use([Navigation]);

const OurMachines: FC = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <Element name={"machines"}>
      <section
        className={styles.machines}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.45) 40%), url(${imgBg.src})`,
        }}
      >
        <Container>
          <div className={styles.machines_inner}>
            <TitleSectionBig text={"Наши станки ЧПУ"} colorText={"light"} />
            <div className={styles.machines_wrapSwiper}>
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                className={styles.machines_slider}
                loop={true}
                navigation={{
                  prevEl: `.${styles["swiper-button-prev"]}`,
                  nextEl: `.${styles["swiper-button-next"]}`,
                }}
              >
                {listOurMachines.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className={styles.machines_sliderItem}
                  >
                    <div className={styles.machines_slideWrapImg}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={500}
                        height={350}
                        quality={100}
                        className={styles.machines_slideImg}
                      />
                    </div>
                    <div className={styles.machines_slideWrapText}>
                      <h4 className={styles.machines_slideTitle}>
                        {item.title}
                      </h4>
                      <p className={styles.machines_slideText}>{item.text}</p>
                      <p className={styles.machines_slideText2}>{item.text2}</p>
                      <ButtonRound
                        text={"Получить прайс-лист"}
                        onClick={() => setIsShowModal(true)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={`${styles["swiper-button-prev"]}`}>
                <button
                  className={styles.adminScreen_btn}
                  type="button"
                  name={"button-prev"}
                >
                  <IconArrowRight />
                </button>
              </div>
              <div className={`${styles["swiper-button-next"]}`}>
                <button type="button" name={"button-next"}>
                  <IconArrowRight />
                </button>
              </div>
            </div>
          </div>
        </Container>
        <AnimatePresence>
          {isShowModal && (
            <ModalWindow cross={"small"} setShow={setIsShowModal}>
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

export default OurMachines;
