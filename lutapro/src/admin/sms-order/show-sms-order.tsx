import {
  Show,
  SimpleShowLayout,
  TextField,
  ChipField,
  DeleteButton,
} from "react-admin";
import CustomImageField from "@/admin/components/custom-image-field";
import CustomFileField from "@/admin/components/custom-file-field";

export const SmsOrderShow = (props: any) => (
  <Show {...props} title={"Заявка LutaPro"}>
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
