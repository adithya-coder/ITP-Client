import React, {useContext} from 'react';
import { Autocomplete } from '@material-ui/lab';
import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';
import formComponentsStyles from '../hooks/UserStyles';
import { getIn } from 'formik';
import Paper from "@material-ui/core/Paper";
import customTheme from "../../../pages/hooks/custom-theme.module.css";
import {ThemeContext} from "../../../ThemeContext";

const FormikMultiSelect = (props: any) => {
    const { textfieldprops, options, form, label, required } = props;
    
    const { error, helperText, ...field } = fieldToTextField(props);
    const { name, value } = field;
    const classes = formComponentsStyles();
    const {customStyles} = useContext(ThemeContext);

    const {autocompleteDropdown, autocompleteContent, } = customStyles
    const errorText =
        getIn(form.touched, name ? name : "") && getIn(form.errors, name ? name : "");
   
    return (
        <FormControl size="small" fullWidth error={!!errorText} className={classes.formSelectors}>
            <Autocomplete
                PaperComponent={({ children }) => (
                    <Paper className={`${customTheme.autocompleteDropdown} ${autocompleteDropdown}`}>{children}</Paper>
                )}
                options={options}
                multiple
                size="small"
                className={customTheme.autocompleteContent}
                style={autocompleteContent}
                value={value ? value : []}
                onChange={(_, value: any) => form.setFieldValue(name, value ? value.value : 0)}
                getOptionLabel={(option: any) => option.label ? option.label : null}
                {...props}
                renderInput={props => (
                    <TextField {...props} {...textfieldprops} label={label + (required ? ' *' : '')} />
                )}
                getOptionSelected={(option, value) => option.value === value.value}
            />
            <FormHelperText>{errorText}</FormHelperText>
        </FormControl>
    );
}

export default React.memo(FormikMultiSelect);