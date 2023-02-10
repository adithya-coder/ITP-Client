import { TextField } from "@material-ui/core";
import { FieldProps, getIn } from "formik";
import React, {useContext} from "react";
import {ThemeContext} from "../../../ThemeContext";

const TextFormField: React.FC<FieldProps> = ({ field, form, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  const {customStyles} = useContext(ThemeContext);

  const {inputFill} = customStyles

  return (
    <TextField
        className={inputFill}
        size="small"
      fullWidth
      margin="normal"
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};

export default TextFormField;
