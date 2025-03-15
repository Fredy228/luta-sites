"use client";

import { type FC, useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import dynamic from "next/dynamic";

import styles from "./steel-cutting.module.scss";

import Container from "@/components/reused/container/container";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);
import imageMilling from "@/../public/img/steel-cutting/milling.webp";
import { SubtitleSectionSmall } from "@/components/reused/common/title-section-small";
import ButtonRound from "@/components/reused/buttons/button-round";
import { TitleSectionBig } from "@/components/reused/common/title-section-big";
import { List } from "@/screens/home/steel-cutting/list";
import { galleryList } from "@/screens/home/gallary/gallery-list";
import SliderGallery from "@/components/ui/slider-gallery/slider-gallery";
import { GalleryTypeEnum } from "@/types/gallery";

const Milling: FC = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [idxCurrPhoto, setIdxCurrPhoto] = useState<number>(1);

  const handleOpenPhoto = (id: number) => {
    const idx = galleryList.findIndex((i) => i.id === id);
    setIdxCurrPhoto(idx);
    setIsShowModal(true);
  };

  return (
    <Element name={"milling"}>
      <section className={styles.steelCut}>
        <Container>
          <div className={styles.steelCut_inner}>
            <div className={styles.steelCut_wrapImg}>
              <Image
                className={styles.steelCut_img}
                src={imageMilling.src}
                alt={"Milling"}
                width={512}
                height={768}
              />
            </div>
            <div className={styles.steelCut_wrapInfo}>
              <TitleSectionBig
                text={"Пробивка отверстий в металле толщиной 16 мм"}
                align={"left"}
              />
              <SubtitleSectionSmall
                text={
                  "Наша компания предоставляет свои услуги на рынке Одессы более 10 лет"
                }
              />
              <p className={styles.steelCut_text}>
                Мы занимаемся резкой металла плазмой, которая благодаря своим
                температурам может справляться с листовым железом толщиной 20 и
                даже 25 мм.
              </p>

              <ul className={styles.steelCut_list}>
                {List.map((item) => (
                  <li className={styles.steelCut_item} key={item.id}>
                    <Image
                      className={styles.steelCut_itemImg}
                      src={item.img}
                      alt={"Milling"}
                      width={500}
                      height={500}
                      onClick={() => handleOpenPhoto(item.id)}
                    />
                  </li>
                ))}
              </ul>

              <div className={styles.steelCut_wrapBtn}>
                <ButtonRound
                  text={"Мангалы и ножи"}
                  isLink={true}
                  link={`/${GalleryTypeEnum.BRAZIERS}`}
                />
                <ButtonRound
                  text={"Резка толстого металла"}
                  isLink={true}
                  link={`/${GalleryTypeEnum.METAL}`}
                />
              </div>
            </div>
            {isShowModal && (
              <ModalWindow setShow={setIsShowModal} scrollPage={true}>
                <SliderGallery idx_curr={idxCurrPhoto} list={List} />
              </ModalWindow>
            )}
          </div>
        </Container>
      </section>
    </Element>
  );
};

export default Milling;
