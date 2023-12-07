import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title, style, color }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      color={color}
      style={style}
      onPress={handleSubmit}
    ></AppButton>
  );
}

export default SubmitButton;
