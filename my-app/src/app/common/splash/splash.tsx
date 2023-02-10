import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, {useContext} from 'react';
import customTheme from "../../pages/hooks/custom-theme.module.css";
import { ThemeContext } from "../../ThemeContext";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        splashWrapper: {
            display: 'flex',
            position: 'fixed',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            // backgroundColor: '#FFFFFF',
        },
        splashLogoImg: {
            width: '140px',
            marginBottom: '20px',
        },
        loaderWrapper: {
            display: 'flex',
            justifyContent: 'center',
            width: '140px',
        }
    }),
);

export default function SplashScreen(props: any) {
    const classes = useStyles();

    const {customStyles} = useContext(ThemeContext);

    const {preLoader, loader} = customStyles

    return (
        <div className={`${classes.splashWrapper} ${customTheme.preLoader}`} style={{...preLoader}}>
            <div>
                <img className={classes.splashLogoImg} src={window.location.origin + "/assets/login/login-logo.png"} alt="splash-logo" />
                <div className={classes.loaderWrapper}>
                    <div className={customTheme.loader} style={{...loader}}></div>
                </div>
            </div>
        </div>
    );
}
