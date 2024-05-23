"use client";

import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

import styles from "./our-machines.module.scss";
import "swiper/scss/navigation";
import "swiper/scss";

import Container from "@/components/reused/container/container";
import imgBg from "@/../public/img/our-machines/our-machine-bg.webp";
import Image from "next/image";
import { listOurMachines } from "@/screens/home/our-machines/list-our-machines";
import { IconArrowRight } from "@/components/reused/icon/icon";
import ButtonRound from "@/components/reused/buttons/button-round";
import { TitleSectionBig } from "@/components/reused/common/title-section-big";

SwiperCore.use([Navigation]);

const OurMachines: FC = () => {
  return (
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
                    <h4 className={styles.machines_slideTitle}>{item.title}</h4>
                    <p className={styles.machines_slideText}>{item.text}</p>
                    <p className={styles.machines_slideText2}>{item.text2}</p>
                    <ButtonRound text={"Получить прайс-лист"} />
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
    </section>
  );
};

export default OurMachines;
