import {
  Show,
  SimpleShowLayout,
  TextField,
  ChipField,
  DeleteButton,
  EditButton,
} from "react-admin";
import CustomImageField from "@/admin/components/custom-image-field";

export const GalleryShow = (props: any) => (
  <Show {...props} title={"Картинка LutaPro"}>
    <SimpleShowLayout>
      <TextField source="id" />
      <CustomImageField source="path" label="Картинка" />
      <TextField source="title" />
      <ChipField source="type" label={"Раздел"} />
      <TextField source="path" label={"Путь"} />
      <EditButton label={"Ред."} />
      <DeleteButton label={"Удалить"} />
    </SimpleShowLayout>
  </Show>
);

export default GalleryShow;
