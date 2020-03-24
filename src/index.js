import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme,} from '@material-ui/core/styles';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
 import'bootstrap-css-only/css/bootstrap.min.css'; 
 import 'mdbreact/dist/css/mdb.css';

const theme =createMuiTheme()
ReactDOM.render(
  <createMuiTheme>
    <App />
    </createMuiTheme>,
  document.getElementById('root')
);

