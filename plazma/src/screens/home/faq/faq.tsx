"use client";

import { type FC, useState } from "react";
import Accordion from "@mui/material/Accordion";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

import styles from "./faq.module.scss";

import Container from "@/components/reused/container/container";
import {
  SubtitleSectionBig,
  TitleSectionBig,
} from "@/components/reused/common/title-section-big";

import imgMan from "@/../public/img/faq/faq-men.webp";
import ButtonRound from "@/components/reused/buttons/button-round";
import { listFAQ } from "@/screens/home/faq/list-faq";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import SendForm from "@/components/ui/send-form/send-form";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);

const FAQ: FC = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.faq_inner}>
          <TitleSectionBig text={"Вопрос-ответ (FAQ)"} />

          <SubtitleSectionBig
            text={"Отвечаем на вопросы потенциальных клиентов"}
          />

          <div className={styles.faq_flex}>
            <div className={styles.faq_wrapAction}>
              <Image
                className={styles.faq_actionImg}
                src={imgMan.src}
                alt={"Avatar default"}
                width={293}
                height={312}
              />
              <span className={styles.faq_actionSpan}>На вопросы отвечает</span>
              <p className={styles.faq_actionName}>Игорь</p>
              <p className={styles.faq_actionPosition}>
                Менеджер отдела продаж
              </p>
              <ButtonRound
                text={"Задать вопрос Игорю"}
                onClick={() => setIsShowModal(true)}
              />
            </div>
            <div className={styles.faq_wrapInfo}>
              {listFAQ.map((item) => (
                <Accordion key={item.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h5 className={styles.faq_infoTitle}>
                      <LiveHelpIcon />
                      {item.title}
                    </h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className={styles.faq_infoText}>{item.text}</p>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isShowModal && (
          <ModalWindow cross={"small"} setShow={setIsShowModal}>
            <SendForm
              title={"ЗАДАТЬ ВОПРОС"}
              text={
                "Напишите свой вопрос и укажите контактную информацию для скорейшего ответа"
              }
              tag={"#Задать вопрос"}
              setOptions={{
                textarea: true,
              }}
            />
          </ModalWindow>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FAQ;
