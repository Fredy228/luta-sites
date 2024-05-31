"use client";

import { Dispatch, type FC, SetStateAction, useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./burger-menu.module.scss";

import logoImg from "@/../public/img/general/logo-lutapro.webp";
import { listNavigation } from "@/components/ui/header/list-nav";
import ButtonRound from "@/components/reused/buttons/button-round";
import { IconCross, IconFacebook } from "@/components/reused/icon/icon";
import dynamic from "next/dynamic";
import SendForm from "@/components/ui/send-form/send-form";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);

type Props = {
  setIsShow: Dispatch<SetStateAction<boolean>>;
};
const BurgerMenu: FC<Props> = ({ setIsShow }) => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.menu_backdrop}
        onClick={() => setIsShow(false)}
      ></motion.div>
      <motion.div
        initial={{ right: "-100%" }}
        animate={{ right: 0 }}
        exit={{ right: "-100%" }}
        className={styles.menu}
      >
        <div className={styles.menu_header}>
          <Image
            className={styles.menu_logo}
            src={logoImg.src}
            alt={"Logo"}
            width={200}
            height={700}
          />
        </div>
        <nav className={styles.menu_nav}>
          <ul className={styles.menu_list}>
            {listNavigation.map((item) => (
              <li className={styles.menu_item} key={item.id}>
                <Link
                  className={styles.menu_link}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsShow(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.menu_footer}>
          <ButtonRound
            text={"Обратный звонок"}
            onClick={() => setIsShowForm(true)}
          />
          <div className={styles.menu_contactsWrap}>
            <a href={"tel:+380679301061"} className={styles.menu_contactsTel}>
              +38 067 93 01 061
            </a>
            <a
              className={styles.menu_contactsMail}
              href="mailto:info@rezba.com.ua"
            >
              info@rezba.com.ua
            </a>
          </div>
          <a
            className={styles.menu_contactsSocial}
            href="https://www.facebook.com/lestnicaua/"
            target={"_blank"}
          >
            <IconFacebook />
          </a>
        </div>
        <button
          className={styles.menu_closeBtn}
          type={"button"}
          onClick={() => setIsShow(false)}
        >
          <IconCross />
        </button>

        <AnimatePresence>
          {isShowForm && (
            <ModalWindow setShow={setIsShowForm} cross={"small"}>
              <SendForm
                title={"ОБРАТНЫЙ ЗВОНОК"}
                text={"Мы свяжемся с вами в ближайшее время"}
                tag={"#Обратный звонок"}
              />
            </ModalWindow>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default BurgerMenu;
