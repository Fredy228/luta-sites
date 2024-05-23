"use client";

import { type FC, useState } from "react";
import { AnimatePresence } from "framer-motion";

import styles from "./contacts.module.scss";

import PopapMenuWrap from "@/components/reused/popap-menu-wrap/PopapMenuWrap";
import { IconFacebook, IconPhoneIncoming } from "@/components/reused/icon/icon";

const ContactsHeader: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

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
      <button className={styles.contacts_btnPhone} type={"button"}>
        <IconPhoneIncoming />
      </button>

      <AnimatePresence>
        {isShow && (
          <PopapMenuWrap
            stylePop={{
              top: "0",
              left: "0",
            }}
            keyItem={1}
            setShow={setIsShow}
          >
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
                  href="tel:+380487022575"
                >
                  +38 048 702 25 75
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
    </div>
  );
};

export default ContactsHeader;
