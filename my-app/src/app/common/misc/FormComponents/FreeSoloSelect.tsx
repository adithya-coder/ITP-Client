import React, {useContext, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import customTheme from "../../../pages/hooks/custom-theme.module.css";
import Paper from "@material-ui/core/Paper";
import {ThemeContext} from "../../../ThemeContext";

const FreeSoloSelect = (props: any) => {

  const [value, setValue] = useState<any>(props.values ? props.values : []);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.stopPropagation()
      const target = e.target as HTMLTextAreaElement;
      value.push(target.value);
      props.onChange(value);
      target.blur();
      target.focus();
    }
  }

  const onChange = (values: any, reason: any) => {
    setValue(values);
    props.onChange(values);
  }

  const {customStyles} = useContext(ThemeContext);

  const {autocompleteDropdown, autocompleteContent, } = customStyles

  return (
    <Autocomplete
        PaperComponent={({ children }) => (
            <Paper className={`${customTheme.autocompleteDropdown} ${autocompleteDropdown}`}>{children}</Paper>
        )}
      multiple
      id={props.id ? props.id : 'free-solo-select'}
      value={value}
      options={props.options ? props.options : []}
      style={{ ...autocompleteContent }}
      onKeyDown={e => handleKey(e)}
      onChange={(e, value, reason) => {
        onChange(value, reason);
      }}
        className={customTheme.autocompleteContent}
      placeholder={props.placeholder ? props.placeholder : 'placeholder'}
      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          fullWidth
        />
      )}
    />
  );
}

export default React.memo(FreeSoloSelect);