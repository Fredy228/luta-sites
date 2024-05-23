import { type FC } from "react";
import Image from "next/image";

import styles from "./header.module.scss";

import Container from "@/components/reused/container/container";
import Contacts from "@/components/ui/header/contacts/contacts";

import logoImg from "@/../public/img/general/logo-lutapro.webp";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_inner}>
          <div className={styles.header_info}>Фрезеровка на станках ЧПУ</div>
          <div className={styles.header_logo}>
            <Image
              className={styles.header_logoImg}
              src={logoImg}
              alt={"Logo"}
              width={323}
              height={90}
            />
          </div>
          <div className={styles.header_contacts}>
            <Contacts />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
