import { type FC } from "react";

import styles from "./exclusive.module.scss";

import Container from "@/components/reused/container/container";
import {
  SubtitleSectionBig,
  TitleSectionBig,
} from "@/components/reused/common/title-section-big";
import bg from "@/../public/img/exclusive/exclusive-bg.webp";
import ButtonRound from "@/components/reused/buttons/button-round";
import { GalleryTypeEnum } from "@/types/gallery";

const Exclusive: FC = () => {
  return (
    <section
      className={styles.exclusive}
      style={{
        backgroundImage: `url(${bg.src}`,
      }}
    >
      <Container>
        <div>
          <TitleSectionBig text={"Эксклюзив из стали"} colorText={"light"} />
          <SubtitleSectionBig
            text={"Декоративные накладки дюрали"}
            colorText={"light"}
          />
          <ul className={styles.exclusive_list}>
            <li className={styles.exclusive_item}>
              <ButtonRound
                text={"Декоративные накладки"}
                isLink
                link={`/${GalleryTypeEnum.DECORMETAL}`}
              />
            </li>
            <li className={styles.exclusive_item}>
              <ButtonRound
                text={"Мебель"}
                isLink
                link={`/${GalleryTypeEnum.FURNITURE}`}
              />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Exclusive;
