"use client";

import React, { type FC, useState } from "react";
import TextField from "@mui/material/TextField";
import { IMaskInput } from "react-imask";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography } from "@mui/material";

import styles from "./send-file-for-calc.tsx.module.scss";

import Container from "@/components/reused/container/container";
import {
  SubtitleSectionBig,
  TitleSectionBig,
} from "@/components/reused/common/title-section-big";
import ButtonRound from "@/components/reused/buttons/button-round";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+(38#) 000 00 00 00"
        definitions={{
          "#": /0/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  },
);

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const SendFileForCalc: FC = () => {
  const [file, setFile] = useState<null | File>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] ?? null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
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
          <form autoComplete="on" className={styles.sendFile_form}>
            <h4 className={styles.sendFile_formTitle}>Заполните форму</h4>
            <p className={styles.sendFile_formText}>
              Минимальный заказ наших услуг 300 грн.
            </p>
            <TextField
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              placeholder={"Введите имя"}
            />
            <TextField
              id="outlined-basic"
              label="Телефон"
              placeholder={"Введите телефон"}
              variant="outlined"
              InputProps={{
                inputComponent: TextMaskCustom as any,
              }}
            />
            <TextField
              id="outlined-basic"
              label="E-mail"
              placeholder={"Введите e-mail"}
              variant="outlined"
            />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
            {file && (
              <Typography variant="body1">
                Выбранный файл: {file.name}
              </Typography>
            )}

            <ButtonRound
              text={"Отправить заявку"}
              type={"submit"}
              style={{ marginTop: "30px" }}
            />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SendFileForCalc;
