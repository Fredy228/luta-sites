import { List, Datagrid, TextField, EditButton, ChipField } from "react-admin";

const GalleryList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" label={"Описание"} />
        <TextField source="path" label={"Путь"} />
        <ChipField source="type" label={"Раздел"} />
        {/*<EditButton />*/}
      </Datagrid>
    </List>
  );
};

export default GalleryList;
