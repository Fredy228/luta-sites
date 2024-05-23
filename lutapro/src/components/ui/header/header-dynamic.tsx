"use client";

import { type FC } from "react";
import Image from "next/image";

import styles from "./header.module.scss";

import useScrollScreen from "@/hooks/scrollScreen";

import Container from "@/components/reused/container/container";

import logoImg from "../../../../public/img/general/logo-lutapro.webp";
import Contacts from "@/components/ui/header/contacts/contacts";
import { listNavigation } from "@/components/ui/header/list-nav";

const HeaderDynamic: FC = () => {
  const scrollValue = useScrollScreen();

  const isScroll = scrollValue > 300;

  return (
    <div className={`${styles.headerDynm} ${isScroll ? styles.scroll : ""}`}>
      <Container>
        <div className={styles.headerDynm_inner}>
          {isScroll && (
            <>
              <div className={styles.headerDynm_logo}>
                <Image
                  className={styles.headerDynm_logoImg}
                  src={logoImg}
                  alt={"Logo"}
                  width={323}
                  height={90}
                />
              </div>
              <button className={styles.headerDynm_burger} type={"button"}>
                <span className={styles.headerDynm_burgerSpan}></span>
              </button>
            </>
          )}
          <nav className={styles.headerDynm_nav}>
            <ul className={styles.headerDynm_navList}>
              {listNavigation.map((item) => (
                <li className={styles.headerDynm_navItem} key={item.id}>
                  <a className={styles.headerDynm_navLink} href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {isScroll && <Contacts />}
        </div>
      </Container>
    </div>
  );
};

export default HeaderDynamic;
