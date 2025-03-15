import React from "react";
import { FileField } from "react-admin";
import get from "lodash/get";
import { useRecordContext } from "ra-core";

const CustomFileField = (props: any) => {
  const { src, ...rest } = props;
  const record = useRecordContext(props);
  const sourceValue = get(record, props.source);
  if (!sourceValue?.path_to_file) return "-";

  const url = `${process.env.SERVER_URL}/${sourceValue?.path_to_file}`;

  return (
    <FileField
      {...rest}
      title={sourceValue.name_file}
      record={{ ...record, [props.source]: url }}
    />
  );
};

export default CustomFileField;
