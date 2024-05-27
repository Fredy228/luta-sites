"use client";

import React, { type FC, useState } from "react";
import { IMaskInput } from "react-imask";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography } from "@mui/material";

import styles from "./send-form.module.scss";
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

type Props = {
  setOptions?: {
    textarea?: boolean;
    file?: boolean;
  };
  title: string;
  text: string;
};
const SendForm: FC<Props> = ({ setOptions, title, text }) => {
  const [file, setFile] = useState<null | File>(null);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] ?? null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <form
      autoComplete="on"
      className={styles.sendFile_form}
      onSubmit={onFormSubmit}
    >
      <h4 className={styles.sendFile_formTitle}>{title}</h4>
      <p className={styles.sendFile_formText}>{text}</p>
      <TextField
        id="outlined-basic"
        label="Имя"
        variant="outlined"
        required={true}
        placeholder={"Введите имя"}
      />
      <TextField
        id="outlined-basic"
        label="Телефон"
        required={true}
        placeholder={"Введите телефон"}
        variant="outlined"
        InputProps={{
          inputComponent: TextMaskCustom as any,
        }}
      />
      <TextField
        id="outlined-basic"
        label="E-mail"
        required={true}
        placeholder={"Введите e-mail"}
        variant="outlined"
      />
      {setOptions?.file && (
        <>
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
            <Typography variant="body1">Выбранный файл: {file.name}</Typography>
          )}
        </>
      )}
      {setOptions?.textarea && (
        <TextField
          id="outlined-multiline-static"
          label="Комментарий"
          multiline
          rows={4}
          required={true}
          placeholder={"Введите сообщение"}
        />
      )}
      <ButtonRound
        text={"Отправить"}
        type={"submit"}
        style={{ marginTop: "30px" }}
      />
    </form>
  );
};

export default SendForm;
