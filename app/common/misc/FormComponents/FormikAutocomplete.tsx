import React, {useContext} from 'react';
import { Autocomplete } from '@material-ui/lab';
import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';
import formComponentsStyles from '../hooks/UserStyles';
import { getIn } from 'formik';
import Paper from "@material-ui/core/Paper";
import customTheme from "../../../pages/hooks/custom-theme.module.css";
import {ThemeContext} from "../../../ThemeContext";

const FormikAutocomplete = (props: any) => {

    const { textfieldprops, options, form, label, required } = props;
    const { error, helperText, ...field } = fieldToTextField(props);
    const { name, value } = field;
    const classes = formComponentsStyles();
    const errorText =
        getIn(form.touched, name ? name : "") && getIn(form.errors, name ? name : "");

    const getLabel = (value: number): string => {
        for(let i=0; i<options.length; i++){
            if (parseInt(options[i].value) === value) {
                return String(options[i].label);
            }
        }
        return "";

    }

    const getLabelString = (value: string): string => {
        for(let i=0; i<options.length; i++){
            // eslint-disable-next-line eqeqeq
            if ((options[i].value) == value) {
                return String(options[i].label);
            }
        }
        return "";

    }

    const {customStyles} = useContext(ThemeContext);

    const {autocompleteDropdown, autocompleteContent, inputFill} = customStyles

    return (
        <FormControl size='small' fullWidth error={!!errorText} className={`${classes.formSelectors} ${inputFill}`}>
            <Autocomplete
                PaperComponent={({ children }) => (
                    <Paper className={`${customTheme.autocompleteDropdown} ${autocompleteDropdown}`}>{children}</Paper>
                )}
                className={`${customTheme.autocompleteContent}`}
                style={autocompleteContent}
                size="small"
                options={options}
                value={value ? { value: value, label: typeof value == 'number' ?  getLabel(value as any) : getLabelString(value as string)} : null}
                onChange={(_, value: any) => form.setFieldValue(name, value ? value.value : 0)}
                getOptionLabel={(option: any) =>  option.label ? option.label : null}
                {...props}
                renderInput={props => (
                    <TextField {...props} {...textfieldprops} label={label + (required ? ' *' : '')} />
                )}
                getOptionSelected={(option, value) => option.value === value.value }
            />
            <FormHelperText>{errorText}</FormHelperText>
        </FormControl>
    );
}

export default React.memo(FormikAutocomplete);