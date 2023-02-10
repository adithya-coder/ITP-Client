import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import formComponentsStyles from "../hooks/UserStyles";


interface Props {
  loading: boolean;
  btnText?: string;
  [x: string]: any;
}

const SubmitBtn: React.FC<Props> = ({
  loading = false,
  btnText = "Save & New",
  ...props
}) => {
  const classes = formComponentsStyles();
  return (
    <Button variant="outlined" size='medium' type="submit" disabled={loading} className={classes.submitBtn} {...props}>
      {btnText}
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </Button>
  );
};

export default SubmitBtn;
