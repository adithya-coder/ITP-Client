import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import tp from '../../../assets/patterns/tp.png';

const useStyles = makeStyles({
 
  footer: {
   
   
    position: 'fixed',
    width: '100%',
    bottom: '0',
    color: 'white',
    fontSize: '5px',
    backgroundImage: `url(${tp})`,
    textAlign:"center",
    backgroundSize: 'cover',
   },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
    <p>This is react sticky footer!!</p>
  
  </footer>
  );
}
