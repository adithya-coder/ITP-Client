import { FieldProps, getIn } from "formik";
import React, {useContext} from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText
} from "@material-ui/core";
import formComponentsStyles from "../hooks/UserStyles";
import {ThemeContext} from "../../../ThemeContext";

const SelectFormField: React.FC<FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
}> = ({ field, form, label, options, ...props }) => {
    const errorText =
        getIn(form.touched, field.name) && getIn(form.errors, field.name);
    const classes = formComponentsStyles();
    const {customStyles} = useContext(ThemeContext);

    const {customSelect, cascadeMenu, menuItem} = customStyles
    return (
        <FormControl
            size="small" fullWidth error={!!errorText} className={`${classes.formSelectors} ${customSelect} ${cascadeMenu}`}>
            {label && <InputLabel className={classes.MuiInputLabelShrink}>{label}</InputLabel>}
            <Select className={`${customSelect} ${cascadeMenu}`} fullWidth {...field} {...props}>
                {options.map(op => (
                    <MenuItem className={menuItem} key={op.value} value={op.value}>
                        {op.label}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{errorText}</FormHelperText>
        </FormControl>
    );
};

export default SelectFormField;
