"use client";

import { type FC, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

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
import { galleryList } from "@/screens/home/gallary/gallery-list";
import { IconArrowRight } from "@/components/reused/icon/icon";
import SliderGallery from "@/components/ui/slider-gallery/slider-gallery";

const Gallery: FC = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [idxCurrPhoto, setIdxCurrPhoto] = useState<number>(1);

  const handleOpenPhoto = (id: number) => {
    const idx = galleryList.findIndex((i) => i.id === id);
    setIdxCurrPhoto(idx);
    setIsShowModal(true);
  };

  return (
    <section className={styles.gallery}>
      <Container>
        <div className={styles.gallery_inner}>
          <TitleSectionBig text={"Фотогалерея последних работ"} />
          <SubtitleSectionBig
            text={"Тут Вы можете посмотреть небольшую часть наших работ"}
          />

          <ImageList
            style={{ marginTop: "30px" }}
            variant="masonry"
            cols={5}
            gap={8}
          >
            {galleryList.map((item) => (
              <ImageListItem key={item.img}>
                <Image
                  className={styles.gallery_img}
                  src={`${item.img}`}
                  alt={"Our works"}
                  width={500}
                  height={500}
                  onClick={() => handleOpenPhoto(item.id)}
                />
              </ImageListItem>
            ))}
          </ImageList>

          {isShowModal && (
            <ModalWindow setShow={setIsShowModal} scrollPage={true}>
              <SliderGallery idx_curr={idxCurrPhoto} list={galleryList} />
            </ModalWindow>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
