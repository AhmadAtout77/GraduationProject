import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

function AppFormPicker({ items, icon, name, style }) {
  const { setFieldValue, values } = useFormikContext();
  return (
    <AppPicker
      style={style}
      onSelectItem={(item) => setFieldValue(name, item)}
      selectedItem={values[name]}
      icon={icon}
      items={items}
    ></AppPicker>
  );
}

export default AppFormPicker;
