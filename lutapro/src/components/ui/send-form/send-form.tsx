"use client";

import React, { type FC, useState } from "react";
import { toast } from "react-toastify";
import { IMaskInput } from "react-imask";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./send-form.module.scss";
import ButtonRound from "@/components/reused/buttons/button-round";
import { sendSmsOrder } from "@/services/axios";
import { isAxiosError } from "axios";

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
  tag: string;
};
const SendForm: FC<Props> = ({ setOptions, title, text, tag }) => {
  const [file, setFile] = useState<null | File>(null);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (setOptions?.file && !file)
        return toast.error("Вы не выбрали файл.", { autoClose: 3000 });

      if (setOptions?.textarea && !message)
        return toast.error("Ваше сообщение пустое.", { autoClose: 3000 });

      setIsLoading(true);
      await sendSmsOrder({
        email: email.trim(),
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim().length === 0 ? tag : message,
        file: file || undefined,
        getPrice: tag === "#Получить прайс-лист",
      });

      setFile(null);
      setEmail("");
      setName("");
      setPhone("");
      setMessage("");

      setIsLoading(false);
      toast.success(
        "Заявка отправлена. Менеджер свяжется с вами в ближайшее время.",
        { autoClose: 5000 },
      );
    } catch (e) {
      if (isAxiosError(e) && e.response?.data?.message) {
        toast.error(e.response?.data?.message.split("|")[1], {
          autoClose: 3000,
        });
      } else {
        toast.error("Неизвестная ошибка. Попробуйте позже.", {
          autoClose: 3000,
        });
      }
    } finally {
      setIsLoading(false);
    }
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Телефон"
        required={true}
        placeholder={"Введите телефон"}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {setOptions?.file && (
        <>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            disabled={isLoading}
            sx={{
              backgroundColor: "secondary.main",
              color: "#fff",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              <>
                {" "}
                Upload file
                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
              </>
            )}
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
          value={message || ""}
          onChange={(e) => setMessage(e.target.value)}
        />
      )}
      <ButtonRound
        text={"Отправить"}
        type={"submit"}
        style={{ marginTop: "30px" }}
        isLoading={isLoading}
      />
    </form>
  );
};

export default SendForm;
