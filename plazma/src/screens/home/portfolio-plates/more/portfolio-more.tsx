"use client";

import { type FC, Fragment, useMemo, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import styles from "./portfolio-more.module.scss";

import { PortfolioType } from "@/screens/home/portfolio-plates/list-portfolio";
import ButtonRound from "@/components/reused/buttons/button-round";
import SliderGallery from "@/components/ui/slider-gallery/slider-gallery";
import { galleryList } from "@/screens/home/gallary/gallery-list";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);

type Props = {
  data: PortfolioType | null;
};
const PortfolioMore: FC<Props> = ({ data }) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [idxCurrPhoto, setIdxCurrPhoto] = useState<number>(1);

  const listPhotos = useMemo<Array<{ id: number; img: string }>>(() => {
    if (!data) return [];
    return data.info.photos.map((i, idx) => ({ id: idx + 1, img: i.src }));
  }, [data]);

  const handleOpenPhoto = (id: number) => {
    const idx = galleryList.findIndex((i) => i.id === id);
    setIdxCurrPhoto(idx);
    setIsShowModal(true);
  };

  if (!data)
    return (
      <div
        style={{ height: "100px", width: "100px", background: "#fff" }}
      ></div>
    );

  return (
    <div className={styles.moreModal}>
      <div className={styles.moreModal_head}>
        <div style={{ height: "100%" }}>
          <Image
            src={data.img.src}
            alt={"Обработка металла"}
            height={data.img.height}
            width={data.img.width}
            className={styles.moreModal_head_image}
          />
        </div>
        <div>
          <p className={styles.moreModal_head_subtitle}>Портфолио</p>
          <h4 className={styles.moreModal_head_title}>{data.title}</h4>
          <p className={styles.moreModal_head_text}>{data.text}</p>
        </div>
        <ButtonRound text={"Смотреть примеры"} isLink link={data.link} />
      </div>
      <div className={styles.moreModal_body}>
        {data.info.text.map((i, idx) => (
          <p key={idx} className={styles.moreModal_body_text}>
            {i}
          </p>
        ))}
        {data.info.sections.map((i) => (
          <Fragment key={i.id}>
            <h5 className={styles.moreModal_body_title}>{i.title}</h5>
            {i.text.map((i, idx) => (
              <p key={idx} className={styles.moreModal_body_text}>
                {i}
              </p>
            ))}
          </Fragment>
        ))}
        <h5 className={styles.moreModal_body_title}>Фотографии наших работ</h5>
        <ul className={styles.moreModal_portfolio}>
          {data.info.photos.map((i, idx) => (
            <li key={idx} className={styles.moreModal_portfolio_item}>
              <Image
                src={i.src}
                alt={"Обработка металла"}
                width={i.width}
                height={i.height}
                className={styles.moreModal_portfolio_image}
                onClick={() => handleOpenPhoto(idx + 1)}
              />
            </li>
          ))}
        </ul>
      </div>

      {isShowModal && (
        <ModalWindow setShow={setIsShowModal} scrollPage={false}>
          <SliderGallery idx_curr={idxCurrPhoto} list={listPhotos} />
        </ModalWindow>
      )}
    </div>
  );
};

export default PortfolioMore;
