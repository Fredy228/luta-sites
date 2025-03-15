"use client";

import { type FC, useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import styles from "./contacts.module.scss";

import PopapMenuWrap from "@/components/reused/popap-menu-wrap/PopapMenuWrap";
import { IconFacebook, IconPhoneIncoming } from "@/components/reused/icon/icon";
import SendForm from "@/components/ui/send-form/send-form";
import useWindowDimensions from "@/hooks/useWindowDimensions";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);

const ContactsHeader: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const isMobile = width < 768;

  const popStyle: Record<string, string> = isMobile
    ? { top: "0", right: "0" }
    : { top: "0", left: "0" };

  const handlePhoneBtn = () => {
    if (isMobile) {
      setIsShow(true);
    } else {
      setIsShowForm(true);
    }
  };

  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_wrap}>
        <button
          className={styles.contacts_btn}
          type={"button"}
          onClick={() => setIsShow(true)}
        >
          +38 067 93 01 061
        </button>
        <a className={styles.contacts_email} href="mailto:info@rezba.com.ua">
          info@rezba.com.ua
        </a>
      </div>
      <button
        className={styles.contacts_btnPhone}
        type={"button"}
        onClick={handlePhoneBtn}
      >
        {isMobile ? <ContactPhoneIcon /> : <IconPhoneIncoming />}
      </button>

      <AnimatePresence>
        {isShow && (
          <PopapMenuWrap stylePop={popStyle} keyItem={1} setShow={setIsShow}>
            <ul className={styles.contactsList}>
              <li className={styles.contactsList_item}>
                <a
                  className={styles.contactsList_link}
                  href="tel:+380679301061"
                >
                  +38 067 93 01 061
                </a>
                <p className={styles.contactsList_text}>менеджер</p>
              </li>
              <li className={styles.contactsList_item}>
                <a
                  className={styles.contactsList_link}
                  href="tel:+380677885157"
                >
                  +38 067 78 85 157
                </a>
                <p className={styles.contactsList_text}>офис</p>
              </li>
              <li className={styles.contactsList_item}>
                <a
                  className={styles.contactsList_email}
                  href="mailto:info@rezba.com.ua"
                >
                  info@rezba.com.ua
                </a>
                <p className={styles.contactsList_text}>для заказов</p>
              </li>
              <li className={styles.contactsList_item}>
                <a
                  className={styles.contactsList_social}
                  href="https://www.facebook.com/lestnicaua/"
                  target={"_blank"}
                >
                  <IconFacebook />
                </a>
              </li>
            </ul>
          </PopapMenuWrap>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isShowForm && (
          <ModalWindow
            setShow={setIsShowForm}
            scrollPage={true}
            cross={"small"}
          >
            <SendForm
              title={"ОБРАТНЫЙ ЗВОНОК"}
              text={"Мы свяжемся с вами в ближайшее время"}
              tag={"#Обратный звонок"}
            />
          </ModalWindow>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactsHeader;
