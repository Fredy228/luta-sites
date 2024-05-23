import { type FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

import styles from "./slider-gallery.module.scss";
import "swiper/scss/navigation";
import "swiper/scss";

import { IconArrowRight } from "@/components/reused/icon/icon";

SwiperCore.use([Navigation]);

type Props = {
  idx_curr: number;
  list: Array<{
    id: number;
    img: string;
    [key: string]: any;
  }>;
};
const SliderGallery: FC<Props> = ({ idx_curr = 1, list }) => {
  return (
    <div className={styles.gallery_modal}>
      <Swiper
        slidesPerView={1}
        initialSlide={idx_curr}
        spaceBetween={0}
        className={styles.gallery_slider}
        loop={true}
        navigation={{
          prevEl: `.${styles["swiper-button-prev"]}`,
          nextEl: `.${styles["swiper-button-next"]}`,
        }}
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.gallery_slide}>
              <Image
                src={item.img}
                alt={"Портфолио"}
                width={1440}
                height={720}
                quality={100}
                className={styles.gallery_slideImg}
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
  );
};

export default SliderGallery;
