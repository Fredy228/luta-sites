"use client";

import { type FC, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
import { galleryList } from "@/screens/home/gallary/gallery-list";
import SliderGallery from "@/components/ui/slider-gallery/slider-gallery";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { GalleryItem } from "@/types/gallery";

type Props = {
  list?: GalleryItem[];
};
const Gallery: FC<Props> = ({ list = [] }) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [idxCurrPhoto, setIdxCurrPhoto] = useState<number>(1);

  const { width } = useWindowDimensions();

  const handleOpenPhoto = (id: number) => {
    const idx = galleryList.findIndex((i) => i.id === id);
    setIdxCurrPhoto(idx);
    setIsShowModal(true);
  };

  const calcColumImageList = (): number => {
    if (width < 768) return 3;
    if (width < 1024) return 4;
    return 5;
  };

  return (
    <Element name={"gallery"}>
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
              cols={calcColumImageList()}
              gap={8}
            >
              {list.map((item) => (
                <ImageListItem key={item.id}>
                  <Image
                    className={styles.gallery_img}
                    src={`${process.env.SERVER_URL}/${item.path}`}
                    alt={item.title}
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
    </Element>
  );
};

export default Gallery;
