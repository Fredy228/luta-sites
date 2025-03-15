import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ChipField,
  ShowButton,
  DeleteButton,
} from "react-admin";
import CustomImageField from "../components/custom-image-field";
import TypeFilter from "./typeFilter";

const GalleryList = (props: any) => {
  return (
    <List
      {...props}
      title={"Список всех картинок сайта Plazma"}
      filters={<TypeFilter />}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" label={"Описание"} />
        <CustomImageField source="path" label="Картинка" />
        <ChipField source="type" label={"Раздел"} />
        <ShowButton label={"Показать"} />
        <EditButton label={"Ред."} />
        <DeleteButton label={"Удалить"} />
      </Datagrid>
    </List>
  );
};

export default GalleryList;
