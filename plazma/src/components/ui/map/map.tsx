"use client";

import { type FC } from "react";
import { Element } from "react-scroll";

import styles from "./map.module.scss";

const Map: FC = () => {
  return (
    <Element name={"contacts"}>
      <section className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.7635263101556!2d30.707709042094997!3d46.39391504939462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633437f3ee45d%3A0x460cbd8a4f8ebe15!2z0J_Qu9Cw0LfQvNC10L3QvdCw0Y8g0YDQtdC30LrQsCDQvNC10YLQsNC70LvQsA!5e0!3m2!1sru!2sua!4v1741099164341!5m2!1sru!2sua"
          className={styles.map_iframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </Element>
  );
};

export default Map;
