"use client";

import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { animateScroll } from "react-scroll";

import styles from "./header.module.scss";

import Container from "@/components/reused/container/container";
import Contacts from "@/components/ui/header/contacts/contacts";

import logoImg from "@/../public/img/general/logo-lutapro.webp";
import BurgerMenu from "@/components/ui/header/burger-menu/burger-menu";
import noScroll from "@/services/no-scroll";
import useScrollScreen from "@/hooks/scrollScreen";
import { ListNavType } from "@/components/ui/header/list-nav";

type Props = {
  listMenu: ListNavType[];
};
const Header: FC<Props> = ({ listMenu }) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const scrollValue = useScrollScreen();

  useEffect(() => {
    if (isShowMenu) {
      noScroll(true);
    } else {
      noScroll(false);
    }
  }, [isShowMenu]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_inner}>
          <div className={styles.header_info}>Фрезеровка на станках ЧПУ</div>
          <button
            className={`${styles.headerDynm_burger} ${styles.mobile}`}
            type={"button"}
            onClick={() => setIsShowMenu(true)}
          >
            <span className={styles.headerDynm_burgerSpan}></span>
          </button>

          <Link href={"/"} className={styles.header_logo}>
            <Image
              className={styles.header_logoImg}
              src={logoImg}
              alt={"Logo"}
              width={323}
              height={90}
            />
          </Link>
          <div className={styles.header_contacts}>
            <Contacts />
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isShowMenu && (
          <BurgerMenu listMenu={listMenu} setIsShow={setIsShowMenu} />
        )}
      </AnimatePresence>

      {scrollValue > 300 && (
        <button
          className={styles.scrollToTop}
          type={"button"}
          onClick={() => animateScroll.scrollToTop()}
        >
          <KeyboardArrowUpIcon />
        </button>
      )}

      <a className={styles.mobilePhone} href="tel:+380679301061">
        <LocalPhoneIcon />
      </a>
    </header>
  );
};

export default Header;
