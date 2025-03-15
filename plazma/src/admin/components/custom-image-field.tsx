import React from "react";
import { ImageField } from "react-admin";
import get from "lodash/get";
import { useRecordContext } from "ra-core";

const CustomImageField = (props: any) => {
  const { src, ...rest } = props;
  const record = useRecordContext(props);
  const sourceValue = get(record, props.source);
  const url = `${process.env.SERVER_URL}/${sourceValue}`;

  return <ImageField {...rest} record={{ ...record, [props.source]: url }} />;
};

export default CustomImageField;
