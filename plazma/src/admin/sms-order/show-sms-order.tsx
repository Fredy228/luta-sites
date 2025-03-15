import { Show, SimpleShowLayout, TextField, DeleteButton } from "react-admin";
import CustomFileField from "@/admin/components/custom-file-field";

export const SmsOrderShow = (props: any) => (
  <Show {...props} title={"Заявка Plazma"}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="email" label={"Email"} />
      <TextField source="name" label={"Имя"} />
      <TextField source="phone" label={"Номер телефона"} />
      <TextField source="message" label={"Комментарий"} />
      <CustomFileField source="file" label={"Файл"} />
      <DeleteButton label={"Удалить"} />
    </SimpleShowLayout>
  </Show>
);

export default SmsOrderShow;
