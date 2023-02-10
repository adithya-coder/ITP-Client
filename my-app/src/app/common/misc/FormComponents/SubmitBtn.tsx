import React, {useContext} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import formComponentsStyles from "../hooks/UserStyles";
import customTheme from "../../../pages/hooks/custom-theme.module.css";
// import { ThemeContext } from "../../../ThemeContext";


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
  // const {customStyles} = useContext(ThemeContext);

  // const {primaryBtn} = customStyles
  return (
    <Button variant="outlined" size='medium' type="submit" disabled={loading} className={customTheme.primaryBtn} {...props} 
    style={
        {
          border: '1px solid #3561b5', backgroundColor: '#3561b5',
  
          '&:hover': {border: '1px solid #3561b5', backgroundColor: '#3561b5',},
          '&:active': {border: '1px solid #3561b5', backgroundColor: '#3561b5',},
          '&:focus': {border: '1px solid #3561b5', backgroundColor: '#3561b5',},
        }
    }>
      {btnText}
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </Button>
  );
};

export default SubmitBtn;
