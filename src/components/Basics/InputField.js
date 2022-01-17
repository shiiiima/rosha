import React from "react";
import { FieldConfig, useField } from "formik";
import { TextField } from "@mui/material";
import "./Basic.css";
const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      style={{ margin: 20 }}
      className="input-form"
      variant="filled"
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};
export default InputField;
