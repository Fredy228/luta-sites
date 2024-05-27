import React, { type FC } from "react";

import styles from "./send-file-for-calc.module.scss";

import Container from "@/components/reused/container/container";
import {
  SubtitleSectionBig,
  TitleSectionBig,
} from "@/components/reused/common/title-section-big";
import SendForm from "@/components/ui/send-form/send-form";

const SendFileForCalc: FC = () => {
  return (
    <section className={styles.sendFile}>
      <Container>
        <div className={styles.sendFile_inner}>
          <TitleSectionBig text={"Отправка файлов для просчёта"} />
          <SubtitleSectionBig
            text={
              "Принимаются: doc, pdf, zip, rar, xls, а так же файлы растровой и векторной графики, 3Д модели."
            }
          />
          <div style={{ width: "100%", marginTop: "50px" }}></div>
          <SendForm
            title={"ЗАПОЛНИТЕ ФОРМУ"}
            text={"Минимальный заказ наших услуг 300 грн."}
            setOptions={{
              file: true,
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default SendFileForCalc;
