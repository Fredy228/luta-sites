"use client";

import { type FC, useState } from "react";
import Image from "next/image";

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
import { MillingList } from "@/screens/home/steel-cutting/milling-list";
import { galleryList } from "@/screens/home/gallary/gallery-list";
import dynamic from "next/dynamic";
import SliderGallery from "@/components/ui/slider-gallery/slider-gallery";

const Milling: FC = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [idxCurrPhoto, setIdxCurrPhoto] = useState<number>(1);

  const handleOpenPhoto = (id: number) => {
    const idx = galleryList.findIndex((i) => i.id === id);
    setIdxCurrPhoto(idx);
    setIsShowModal(true);
  };

  return (
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
            <TitleSectionBig text={"Фрезеровка 3D и 4D"} />
            <SubtitleSectionSmall
              text={
                'ЧПУ фрезеровка - современный и надежный способ создания резных изделий от компании "ЛЮТАПРО"'
              }
            />
            <p className={styles.steelCut_text}>
              Сложные, резные деревянные элементы – это далеко не все, что можно
              изготовить на станке ЧПУ
            </p>

            <ul className={styles.steelCut_list}>
              {MillingList.map((item) => (
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

            <ButtonRound text={"Смотреть портфолио"} onClick={() => ""} />
          </div>
          {isShowModal && (
            <ModalWindow setShow={setIsShowModal} scrollPage={true}>
              <SliderGallery idx_curr={idxCurrPhoto} list={MillingList} />
            </ModalWindow>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Milling;
