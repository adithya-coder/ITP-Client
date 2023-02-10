import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FieldProps } from "formik";
import React from "react";

interface Props extends CheckboxProps {
  label: string;
}

const CheckboxFormField: React.FC<FieldProps & Props> = React.memo(
  ({ form, field, label, ...props }) => {
    return (
      <FormControlLabel
        control={<Checkbox {...field} {...props} />}
        label={label}
      />
    );
  }
);

export default CheckboxFormField;
