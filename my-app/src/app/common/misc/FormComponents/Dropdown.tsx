import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import React, {useContext} from "react";
import {ThemeContext} from "../../../ThemeContext";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

export interface Item {
  value: any;
  description: string | number;
}

interface Props {
  value: any;
  onChange: (value: any) => void | undefined;
  items: Item[];
  showNone?: boolean;
}

const {customStyles} = useContext(ThemeContext);

const {menuItem} = customStyles

const Dropdown: React.FC<Props> = ({
  value,
  onChange,
  items,
  showNone = true,
}) => {
  // console.log(items);
  return (
    <Select
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
      input={<BootstrapInput name="quantity" id="age-customized-select" />}
    >
      {showNone && (
        <MenuItem className={menuItem} value={0}>
          <em>none</em>
        </MenuItem>
      )}
      {items.map((item: Item) => (
        <MenuItem className={menuItem} key={item.value} value={item.value}>
          {item.description}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
