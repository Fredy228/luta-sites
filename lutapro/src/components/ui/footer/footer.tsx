import { type FC } from "react";
import Image from "next/image";

import styles from "./footer.module.scss";

import Container from "@/components/reused/container/container";

import logoImg from "@/../public/img/general/logo-lutapro.webp";
import { IconFacebook } from "@/components/reused/icon/icon";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_inner}>
          <Image
            className={styles.footer_logo}
            src={logoImg.src}
            alt={"Logo"}
            width={450}
            height={150}
          />
          <p className={styles.footer_name}>ФРЕЗЕРОВКА НА СТАНКАХ ЧПУ</p>
          <ul className={styles.footer_list}>
            <li className={styles.footer_item}>
              <a className={styles.footer_tel} href="tel:+380679301061">
                +38 067 93 01 061
              </a>
            </li>
            <li className={styles.footer_item}>
              <a className={styles.footer_mail} href="mailto:info@rezba.com.ua">
                info@rezba.com.ua
              </a>
            </li>
            <li className={styles.footer_item}>
              <a
                className={styles.footer_social}
                href="https://www.facebook.com/lestnicaua/"
                target={"_blank"}
              >
                <IconFacebook />
              </a>
            </li>
          </ul>
          <span className={styles.footer_copyright}>
            &#169; LUTAPRO, &#169; Новые лестницы, &#169; Lestnica.UA
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
