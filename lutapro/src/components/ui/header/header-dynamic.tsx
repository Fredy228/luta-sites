"use client";

import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import styles from "./header.module.scss";

import useScrollScreen from "@/hooks/scrollScreen";

import Container from "@/components/reused/container/container";

import logoImg from "../../../../public/img/general/logo-lutapro.webp";
import Contacts from "@/components/ui/header/contacts/contacts";
import BurgerMenu from "./burger-menu/burger-menu";
import { listNavigation } from "@/components/ui/header/list-nav";
import { AnimatePresence } from "framer-motion";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import noScroll from "@/services/no-scroll";

const HeaderDynamic: FC = () => {
  const scrollValue = useScrollScreen();
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const isMobile = width < 768;
  const isScroll = scrollValue > 300;

  useEffect(() => {
    if (isShowMenu) {
      noScroll(true);
    } else {
      noScroll(false);
    }
  }, [isShowMenu]);

  if (isMobile && !isScroll) return;

  return (
    <div className={`${styles.headerDynm} ${isScroll ? styles.scroll : ""}`}>
      <Container>
        <div className={styles.headerDynm_inner}>
          {isScroll && (
            <>
              {isMobile && (
                <button
                  className={styles.headerDynm_burger}
                  type={"button"}
                  onClick={() => setIsShowMenu(true)}
                >
                  <span className={styles.headerDynm_burgerSpan}></span>
                </button>
              )}
              <div className={styles.headerDynm_logo}>
                <Image
                  className={styles.headerDynm_logoImg}
                  src={logoImg}
                  alt={"Logo"}
                  width={323}
                  height={90}
                />
              </div>
              {!isMobile && (
                <button
                  className={styles.headerDynm_burger}
                  type={"button"}
                  onClick={() => setIsShowMenu(true)}
                >
                  <span className={styles.headerDynm_burgerSpan}></span>
                </button>
              )}
            </>
          )}
          <nav className={styles.headerDynm_nav}>
            <ul className={styles.headerDynm_navList}>
              {listNavigation.map((item) => (
                <li className={styles.headerDynm_navItem} key={item.id}>
                  <Link
                    className={styles.headerDynm_navLink}
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {isScroll && <Contacts />}
        </div>
      </Container>

      <AnimatePresence>
        {isShowMenu && <BurgerMenu setIsShow={setIsShowMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default HeaderDynamic;
