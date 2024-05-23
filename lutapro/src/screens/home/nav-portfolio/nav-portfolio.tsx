import { type FC } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

import styles from "./nav-portfolio.module.scss";

import Container from "@/components/reused/container/container";
import Link from "next/link";
import { ListNavPortfolio } from "@/screens/home/nav-portfolio/list-nav-portfoliio";
import ButtonRound from "@/components/reused/buttons/button-round";

const NavPortfolio: FC = () => {
  return (
    <section className={styles.navPortf}>
      <Container>
        <div className={styles.navPortf_inner}>
          <ImageList
            className={styles.navPortf_list}
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {ListNavPortfolio.map((item) => (
              <ImageListItem
                className={styles.navPortf_item}
                key={item.id}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <Link href={item.url} className={styles.navPortf_link}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={700}
                    height={700}
                    className={styles.navPortf_img}
                  />
                  <div className={styles.navPortf_overlay}>
                    <h3 className={styles.navPortf_overlayTitle}>
                      {item.name}
                    </h3>
                    <p className={styles.navPortf_overlayText}>{item.text}</p>
                    <span className={styles.navPortf_overlayBtn}>Смотреть</span>
                  </div>
                </Link>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Container>
    </section>
  );
};

export default NavPortfolio;
