import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo500} from 'material-ui/styles/colors';
import {cyan700} from 'material-ui/styles/colors';
import {cyan500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: indigo500,
    primary1Color: cyan500,
    primary2Color: cyan700,
  },
  raisedButton: {
    color: cyan700,
  }
});

const Page = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Page />, document.getElementById('root'));
registerServiceWorker();
