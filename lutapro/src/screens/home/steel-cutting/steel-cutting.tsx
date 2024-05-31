"use client";

import { type FC, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Element } from "react-scroll";

import styles from "./steel-cutting.module.scss";

import Container from "@/components/reused/container/container";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);
import imageSteelCut from "@/../public/img/steel-cutting/steel-cutting.webp";
import { SubtitleSectionSmall } from "@/components/reused/common/title-section-small";
import ButtonRound from "@/components/reused/buttons/button-round";
import { SteelCuttingList } from "@/screens/home/steel-cutting/steel-cut-list";
import { TitleSectionBig } from "@/components/reused/common/title-section-big";
import { galleryList } from "@/screens/home/gallary/gallery-list";
import SliderGallery from "@/components/ui/slider-gallery/slider-gallery";

const SteelCutting: FC = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [idxCurrPhoto, setIdxCurrPhoto] = useState<number>(1);

  const handleOpenPhoto = (id: number) => {
    const idx = galleryList.findIndex((i) => i.id === id);
    setIdxCurrPhoto(idx);
    setIsShowModal(true);
  };

  return (
    <Element name={"plasma-cutting"}>
      <section className={styles.steelCut}>
        <Container>
          <div className={styles.steelCut_inner}>
            <div className={styles.steelCut_wrapInfo}>
              <TitleSectionBig text={"Резка листовой стали"} />
              <SubtitleSectionSmall
                text={
                  "Предлагаем услугу плазменной резке металла толщиной от 1 до 25 мм с применением технологии автоматической плазменной резке резки по чертежам и эскизам заказчика."
                }
              />
              <p className={styles.steelCut_text}>
                Преимущества плазменной резки металла: — высокая скорость резки;
                — способность резать металлы и сплавы толщиной до 25 мм; —
                низкая стоимость.
              </p>

              <ul className={styles.steelCut_list}>
                {SteelCuttingList.map((item) => (
                  <li className={styles.steelCut_item} key={item.id}>
                    <Image
                      onClick={() => handleOpenPhoto(item.id)}
                      className={styles.steelCut_itemImg}
                      src={item.img}
                      alt={"Steel cutting"}
                      width={500}
                      height={500}
                    />
                  </li>
                ))}
              </ul>

              <ButtonRound text={"Смотреть портфолио"} onClick={() => ""} />
            </div>
            <div className={styles.steelCut_wrapImg}>
              <Image
                className={styles.steelCut_img}
                src={imageSteelCut.src}
                alt={"Steel cutting"}
                width={512}
                height={768}
              />
            </div>

            {isShowModal && (
              <ModalWindow setShow={setIsShowModal} scrollPage={true}>
                <SliderGallery
                  idx_curr={idxCurrPhoto}
                  list={SteelCuttingList}
                />
              </ModalWindow>
            )}
          </div>
        </Container>
      </section>
    </Element>
  );
};

export default SteelCutting;
