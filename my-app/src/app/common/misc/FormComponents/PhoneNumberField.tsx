
import { getIn } from "formik";
import MuiPhoneNumber from "material-ui-phone-number";
import React from "react";
const PhoneNumberField: React.FC<any> = ({ field, form, ...props }) => {
  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <MuiPhoneNumber
      fullWidth
      size="small"
      margin="normal"
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
      defaultCountry={'lk'}
      disableAreaCodes
      countryCodeEditable={false}
      onChange={value => {
        if (props.onChange) {
          props.onChange(value);
        }
        form.setFieldValue(field.name, value, false);
      }}
      onlyCountries={["lk", "sg", "in", "mv", "ae", "it", "at", 'bd', 'cn', 'dk', 'de', 'hk', 'id', 'jp', 'kw', 'my', 'nz', 'pk', 'qa', 'ru', 'th', 'gb', 'zw',]}
    />
  );
};

export default PhoneNumberField;
