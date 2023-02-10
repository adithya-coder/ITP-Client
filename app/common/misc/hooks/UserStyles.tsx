import { makeStyles } from "@material-ui/core";

const formComponentsStyles = makeStyles((theme) => ({

    submitBtn: {
        color: '#ffffff',
        minWidth: '100px',
        width: "100%",
        backgroundColor: '#3f51b5',

        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#3f51b5',
        },
    },

    buttonProgress: {
        color: "grey[500]",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12,
    },

    formSelectors: {
        marginTop: '10px',
    },

    MuiInputLabelShrink: {
        zIndex: 1,
        padding: '0 6px',
        transform: 'translate(14px, -8px) scale(0.75)',
        transformOrigin: 'top left',
        backgroundColor: 'transparent',
    },

}));

export default formComponentsStyles;