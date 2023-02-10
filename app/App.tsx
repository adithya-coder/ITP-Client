import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Router } from 'react-router';
import { AppContextProvider } from './AppContext';
import ApplicationLayout from './layouts/ApplicationLayout';
import history from './@history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MuiThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import blue from '@material-ui/core/colors/blue';
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
})
const App = (props: any) => {

  return (
    // <AppContextProvider
		// 	// value={
		// 	// 	Routes.routes
		// 	// }
		// >
     
      <Provider store={store}>
   
          <Router history={history}>
          <MuiThemeProvider theme={theme}>
              <ApplicationLayout/>
              </MuiThemeProvider>
              <ToastContainer autoClose={2000} position="bottom-right"/>
         
          </Router>
     
      </Provider>
    
    // </AppContextProvider>

  );
}
export default App;
