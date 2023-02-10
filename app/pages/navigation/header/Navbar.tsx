import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { alpha, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React, {useContext} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import history from '../../../@history';
//import { setUserCompany, setUserData, setUserLocation, userLoggedOut } from '../../../auth/store/userSlice';
import LanguageSwitcher from '../../../common/languageSwicher/LanguageSwitcher';

import { RootState } from "../../../store";
import { setFoldedClose, setFoldedOpen } from "../../../store/application/navBarSlice";

import customTheme from "../../../pages/hooks/custom-theme.module.css";
import Layout from '../../../Layout';
import h2bisLogo from "../../../assets/h2bis_Logo.png"
import {ThemeContext} from "../../../ThemeContext";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    topBar: {
      backgroundColor: '#962741' ,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    formControl: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      minWidth: 120,
    },

    minWidthUnset: {
      minWidth: 'unset !important',
    },

    locationSelect: {
      marginLeft: 10,
      marginRight: 10,
      border: 'none !important',
      color: "#fff",
      '&:before': {
        border: 'none !important',
        borderColor: 'transparent !important',
      },
      '&:hover:not(.Mui-disabled):before': {
        border: 'none !important',
        borderColor: 'transparent !important',
      }
    },

    languageSwitch: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // color: '#ffffff',

      "& p": {
        // color: '#ffffff',
      }
    }


  }),
);

interface ITopBar {
  selectedThemeProp: string;
}

export default function TopBar(props: ITopBar) {

  const {
    template ,  setTemplate,
    mode, setMode, theme,
    customStyles

  } = useContext(ThemeContext);


  const handleMode = (e:any) => {

    setMode(e.target.value)
    theme(template, e.target.value)
    localStorage.setItem("mode", e.target.value);
  }

  const handleTemplate = (e:any) => {
    setTemplate(e.target.value)
    theme(e.target.value, mode)
    localStorage.setItem("template", e.target.value);
  }

  const {topBarMenu, topBar, topToolBar, themeChangeMain, menuItem} = customStyles

  const classes = useStyles(props);
  const dispatch = useDispatch();

  const foldedOpen = useSelector((state: RootState) => state.navBar.foldedOpen);
  // const loginUser = useSelector((state: RootState) => state.)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const user = useSelector((state: RootState) => state.auth.user);

  // const getUserLocations = async (companyId: number) => {
  //   getUserLocationsLOV(user.data.userId, companyId).subscribe({
  //     next: (response: any) => {
  //       let userLocationList = response.data.response;
  //       setUserLocation(userLocationList[0].value);
  //       dispatch(setUserCompany(companyId));
  //       dispatch(setUserCompany(userLocationList[0].value));
  //       handleLocationLogin(companyId, userLocationList[0].value);
  //     }, error: (error: any) => { }
  //   })
  // }

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
  //  dispatch(userLoggedOut());
    history.push({
      pathname: '/login',
    });
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
        className={`${customTheme.topBarMenu} ${themeChangeMain}`}
        style={{...topBarMenu}}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className={menuItem} onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem className={menuItem} onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem className={menuItem} onClick={handleLogout}>Logout</MenuItem>

    </Menu>
  );



  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={menuItem}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem className={menuItem}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Adithya</p>
      </MenuItem>
    </Menu>
  );

  const handleSideNavBar = () => {
    if (foldedOpen)
      dispatch(setFoldedClose());
    else
      dispatch(setFoldedOpen());
  }

  const handleReload = () => {
    setTimeout(() => window.location.reload(), 2000);
  }
  const handleCompanyChange = async (companyId: number) => {
    // await getUserLocations(companyId);
    await handleReload();

  }
  // const handleLocationLogin = async (companyId: number, locationId: number) => {
  //   getUserPermissions(user.data.userId, companyId, locationId).subscribe({
  //     next: (response: any) => {
  //       var userObj: IUserData = JSON.parse(JSON.stringify(user.data));
  //       userObj.companyId = companyId;
  //       userObj.locationId = locationId;
  //       userObj.locationAccess = response.data.response.permissionList;
  //       dispatch(setUserData(userObj));
  //       LocalStorageService.setUserInfo(JSON.stringify(userObj));
  //       localStorage.setItem("token", String(user.data.token));
  //     }, error: (error: any) => {
  //       toast(error, { className: "toast-error-container" });
  //     }
  //   })
  // }


  return (
    <div className={classes.grow}>

      <Layout />
      <AppBar className={`${customTheme.topBar}`} style={{...topBar}} position="static">
        <Toolbar className={`${customTheme.topToolBar} `} style={{...topToolBar}}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleSideNavBar}
          >
            <MenuIcon />
          </IconButton>
          <img className={customTheme.h30px} src={h2bisLogo} alt="logo" loading="lazy"></img>
          {/*<Typography className={classes.title} variant="h6" noWrap>*/}
          {/*  Zincat*/}
          {/*</Typography>*/}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            { }

            <FormControl className={classes.formControl}>
              <Select
                className={classes.locationSelect}
                value={1}
                onChange={(e: any) => {
                  handleCompanyChange(parseInt(e.target.value))
                }
                }
                label="Company"
              >
                {
                /* {user.data.userCompanies.map((company: any) => (
                  <MenuItem className={menuItem} key={company.value} value={company.value}>{company.label}</MenuItem>
                ))} */
                <MenuItem className={menuItem} key="2" value="2">MALABE</MenuItem>
                }
                


              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <Select
                className={classes.locationSelect}
                //value={loginUser.data.locationId}
                //onChange={((e: any) => { dispatch(setUserLocation(parseInt(e.target.value))) })}
                label="Location"
              >
                {/* {user.data.userLocations.map((location: any) => (
                  <MenuItem className={menuItem} key={location.value} value={location.value}>{location.label}</MenuItem>
                ))} */
                <MenuItem className={menuItem} key="1" value="1">MALABE</MenuItem>}
              </Select>
            </FormControl>
            <FormControl className={classes.languageSwitch}>
              <LanguageSwitcher />
            </FormControl>

            { }

            <MenuItem>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />  <p className={"f-14 mx-0 ml-5"}> ADITHYA </p>
              </IconButton>
              { }
            </MenuItem>

            <FormControl className={`${classes.formControl} ${classes.minWidthUnset}`}>
              <Select
                  className={`${classes.locationSelect}`}
                  value={template}
                  onChange={handleTemplate}
                  label="Theme"
              >
                <MenuItem className={menuItem} value="template1">Red</MenuItem>
                <MenuItem className={menuItem} value="template2">Blue</MenuItem>
                <MenuItem className={menuItem} value="template3">Green</MenuItem>
                <MenuItem className={menuItem} value="template4">Orange</MenuItem>
              </Select>

            </FormControl>

            <FormControl className={`${classes.formControl} ${classes.minWidthUnset}`}>
              <Select
                  className={classes.locationSelect}
                  value={mode}
                  onChange={handleMode}
                  label="Theme"
              >
                <MenuItem className={menuItem} value="dark">dark</MenuItem>
                <MenuItem className={menuItem} value="light">light</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

