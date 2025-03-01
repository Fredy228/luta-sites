"use client";

import { type FC, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Element } from "react-scroll";

import styles from "./gallery.module.scss";

import Container from "@/components/reused/container/container";
import {
  SubtitleSectionBig,
  TitleSectionBig,
} from "@/components/reused/common/title-section-big";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);
import SliderGallery from "@/components/ui/slider-gallery/slider-gallery";
import { GalleryItem } from "@/types/gallery";

type Props = {
  list?: GalleryItem[];
  colorTitle?: "dark" | "light";
  title: string;
  text?: string;
};
const Gallery: FC<Props> = ({
  list = [],
  colorTitle = "dark",
  text,
  title,
}) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [idxCurrPhoto, setIdxCurrPhoto] = useState<number>(1);

  const handleOpenPhoto = async (id: number) => {
    const idx = list.findIndex((i) => i.id === id);
    await setIdxCurrPhoto(idx);
    setIsShowModal(true);
  };

  return (
    <Element name={"gallery"}>
      <section className={styles.gallery}>
        <Container>
          <div className={styles.gallery_inner}>
            <TitleSectionBig colorText={colorTitle} text={title} />
            {text && <SubtitleSectionBig colorText={colorTitle} text={text} />}
            <ul className={styles.gallery_list}>
              {list &&
                list.map((item) => (
                  <li className={styles.gallery_item} key={item.id}>
                    <Image
                      className={styles.gallery_img}
                      src={`${process.env.SERVER_URL}/${item.path}`}
                      alt={item.title}
                      width={500}
                      height={500}
                      onClick={() => handleOpenPhoto(item.id)}
                    />
                  </li>
                ))}
            </ul>

            {isShowModal && (
              <ModalWindow setShow={setIsShowModal} scrollPage={true}>
                <SliderGallery idx_curr={idxCurrPhoto} list={list} />
              </ModalWindow>
            )}
          </div>
        </Container>
      </section>
    </Element>
  );
};

export default Gallery;
