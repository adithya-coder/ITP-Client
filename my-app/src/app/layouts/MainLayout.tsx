import React, { Suspense, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ctxt, { AppContextConsumer } from "../AppContext";
import { Grid } from "@material-ui/core";
import { matchRoutes, renderRoutes } from "react-router-config";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import MiniDrawer from "../pages/navigation/slideNav/SidebarMenu";
import LabelBottomNavigation from "../pages/navigation/footer/Footer";
import Example from "../pages/customer/index";
import Logo from "../assets/logo.png"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: "100%",
      padding: theme.spacing(0, 3),
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flex: 1,
      width: "100%",
      height: "calc(100vh - 52px)",
      overflowX: "hidden",
      overflowY: "scroll",
      padding: "15px",

      "&::-webkit-scrollbar": {
        width: "8px",
        borderRadius: "10px",
        border: "unset !important",
        outline: "unset !important",
      },
      "&::-webkit-scrollbar-track": {
        border: "unset !important",
        outline: "unset !important",
        "-webkit-box-shadow": "unset",
      },
      "&::-webkit-scrollbar-thumb": {
        border: "unset !important",
        outline: "unset !important",
        borderRadius: "10px",
        backgroundColor: "#bab3b3",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px",
      },
      [theme.breakpoints.up("md")]: {},
      [theme.breakpoints.up("lg")]: {},
    },
    sidebar: {
      zIndex: 1,
      padding: 0,
      margin: 0,
      position: "relative",

      [theme.breakpoints.down("sm")]: {
        width: "0px !important",
      },
      [theme.breakpoints.up("md")]: {},
      [theme.breakpoints.up("lg")]: {},
    },
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.4em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
      },
   },
    
  }),
);

const DefaultLayout =() => {
  const classes = useStyles();
  
 
  return (
    <div>
 <div className={classes.root}>
{(
       
                   <MiniDrawer
                   Logo={Logo}/>

     )}   <div className={classes.content}>
            <div className={classes.toolbar} />
            <Suspense fallback={<div>Loading...</div>}>
           
            <Example/>
            
                    </Suspense>
                 
            </div>
        </div>
        {/* <LabelBottomNavigation/> */}
        </div>
  );
  }
  export default DefaultLayout;

