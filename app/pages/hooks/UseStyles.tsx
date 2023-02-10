import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({

  FormControl: {
    minWidth: 175
  },


  customScroll: {

    '&::-webkit-scrollbar': {
      width: '8px !important',
    },

    '&::-webkit-scrollbar-track': {
      outline: 'unset !important',
      borderRadius: '10px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#bab3b3 !important',
      borderRadius: '10px',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: '#5e5858',
    },
  },

  w100: {
    width: '100%'
  },

  dFlex: { display: 'flex' },

  flexDirectionRow: { flexDirection: 'row' },

  alignCenter: { alignItems: 'center'},

  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyCenter: { justifyContent: 'center' },
  justifySpaceBetween: { justifyContent: 'space-between' },
  justifySpaceAround: { justifyContent: 'space-around' },
  justifySpaceEvenly: { justifyContent: 'space-evenly' },

  m0: { margin: '0 !important' },
  p0: { padding: '0 !important' },

  // Margin
  mt0: { marginTop: '0 !important' },
  mt5: { marginTop: '5px' },
  mt10: { marginTop: '10px' },
  mt20: { marginTop: '20px' },

  mb0: { marginBottom: '0 !important' },
  mb5: { marginBottom: '5px' },
  mb10: { marginBottom: '10px' },
  mb20: { marginBottom: '20px' },

  ml0: { marginLeft: '0 !important' },
  ml5: { marginLeft: '5px' },
  ml10: { marginLeft: '10px' },
  ml20: { marginLeft: '20px' },

  mr0: { marginRight: '0 !important' },
  mr5: { marginRight: '5px' },
  mr10: { marginRight: '10px' },
  mr20: { marginRight: '20px' },

  // Padding
  p8: {padding: '8px'},
  px8: {padding: '0 8px !important'},

  pt0: { paddingTop: '0' },
  pt5: { paddingTop: '5px' },
  pt10: { paddingTop: '10px' },
  pt20: { paddingTop: '20px' },

  pb0: { paddingBottom: '0' },
  pb5: { paddingBottom: '5px' },
  pb10: { paddingBottom: '10px' },
  pb20: { paddingBottom: '20px' },

  pl0: { paddingLeft: '0' },
  pl5: { paddingLeft: '5px' },
  pl10: { paddingLeft: '10px' },
  pl20: { paddingLeft: '20px' },

  pr0: { paddingRight: '0' },
  pr5: { paddingRight: '5px' },
  pr10: { paddingRight: '10px' },
  pr20: { paddingRight: '20px' },

  // Buttons
  cancelBtn: {
    color: '#ffffff',
    minWidth: '100px',
    backgroundColor: '#8a8f8b',

    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#585958',
    },
  },

  submitBtn: {
    color: '#ffffff',
    minWidth: '100px',
    backgroundColor: '#3f51b5',

    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#303b98',
    },
  },

  progressBar: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  locationComponent: {
    border: 'solid 3px #fdf0f6',
    borderRadius: '3px',
    padding: '5px',
    width: 'auto',
    display: 'inline-block',
  },
  hierarchyBoxText: {
    color: '#1e0411'
  },

  initechOrgChart: {
    borderRight: 'solid 3px black'
  },
  heading: {
    fontWeight: "bold",
    letterSpacing: 3,
    textAlign: "center",
    padding: 10,
    fontSize: 20,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    marginBottom: "25px",


  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: "none",
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  image: {
    height: 300,
    width: "100%",
    margin: "0 auto",
  },
  table: {
    marginTop: 10,
  },
  modalRight: {
    right: 0,
    height: "100%",
    position: "absolute",
    OverflowEvent: "hidden",
    transition: "1.6s",
    // paddingTop: "60px",
    overflow: "scroll",
  },
  modalSmall: {
    height: "80%",
    transition: "1.6s",
    overflow: "scroll",
    marginRight: "25%",
    marginLeft: "20%",
    marginTop: "20px"
  },
  modalPaper: {
    position: "absolute",
    width: "80%",
    maxHeight: "min-content",
    margin: "auto",
    top: "10px",
    bottom: "0",
    left: "0",
    right: "0",
    borderRadius: "4px !important",
    overflow: "auto",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2, 2),

    '@media (min-width: 320px) and (max-width: 575px)': {
      width: '96%',
      top: "10px",
      bottom: "0",
      left: "0",
      right: "0",
    },

    '@media (min-width: 576px) and (max-width: 767px)': {
      width: '96%',
      top: "10px",
      bottom: "0",
      left: "0",
      right: "0",
    },

    '@media (min-width: 768px) and (max-width: 991px)': {
      width: '96%',
      top: "10px",
      bottom: "0",
      left: "0",
      right: "0",
    },
  },
  footer: {
    position: "relative",
    bottom: 0,
  },
  sidenav: {
    height: "100vh",
    width: "80%",
    top: 0,
    right: 20,
    zIndex: 1,
    position: "fixed",
    OverflowEvent: "hidden",
    transition: "0.6s",
    paddingTop: "60px",
  },
  tabBar: {
    flexGrow: 1,
    width: "90%",
    backgroundColor: theme.palette.background.paper,
  },
  tabSection: {
    borderRadius: "4px",
    borderStyle: "solid",
  },
  paperSection: {
    position: "relative",
    width: "100%",
    marginBottom: "25px",
    marginTop: "25px",
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#ffffff",
    backgroundColor: "#8a8f8b",
  },
  paperSectionIcon: {
    right: 20,
    position: "absolute",
  },
  formRoot: {
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
  customSplash: {
    position: "absolute",
    left: "-6%",
    top: "-10%",
  },

}));

export default useStyles;