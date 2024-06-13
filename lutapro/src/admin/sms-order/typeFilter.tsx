import React from "react";
import { Filter, TextInput, DateInput } from "react-admin";

const TypeFilterSms = (props: any) => (
  <Filter {...props}>
    <TextInput name={"email"} source="email" label={"Email"} />
    <TextInput name={"name"} source="name" label={"Имя"} />
    <TextInput name={"phone"} source="phone" label={"Номер телефона"} />
    <TextInput name={"message"} source="message" label={"Комментарий"} />
    {/*<TextInput name={"file"} source="file" label={"Файл"} />*/}
    <DateInput name={"createAt"} source="createAt" label={"Дата"} />
  </Filter>
);

export default TypeFilterSms;
