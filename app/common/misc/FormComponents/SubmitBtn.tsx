import React, {useContext} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import formComponentsStyles from "../hooks/UserStyles";
import customTheme from "../../../pages/hooks/custom-theme.module.css";
import { ThemeContext } from "../../../ThemeContext";


interface Props {
  loading: boolean;
  btnText?: string;
  [x: string]: any;
}

const SubmitBtn: React.FC<Props> = ({
  loading = false,
  btnText = "Save & Close",
  ...props
}) => {
  const classes = formComponentsStyles();
  const {customStyles} = useContext(ThemeContext);

  const {primaryBtn} = customStyles
  return (
    <Button variant="outlined" size='medium' type="submit" disabled={loading} className={customTheme.primaryBtn} {...props} style={primaryBtn}>
      {btnText}
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </Button>
  );
};

export default SubmitBtn;
