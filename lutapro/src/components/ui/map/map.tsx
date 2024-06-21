"use client";

import { type FC } from "react";
import { Element } from "react-scroll";

import styles from "./map.module.scss";

const Map: FC = () => {
  return (
    <Element name={"contacts"}>
      <section className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2750.5452171779193!2d30.715594!3d46.418072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6335553421437%3A0xda7a698cb7cc64b6!2z0JvRjtGC0LDQv9GA0L4!5e0!3m2!1sru!2sua!4v1716657924540!5m2!1sru!2sua"
          className={styles.map_iframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </Element>
  );
};

export default Map;
