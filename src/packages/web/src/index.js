// index.js - WEB
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import registerServiceWorker from '../../components/src/registerServiceWorker';
import 'antd/dist/antd.css';
import NotificationToaster from '../../components/src/NotificationToaster.web';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Router>
    <div>
      <App />
      <NotificationToaster />
      <ToastContainer />
    </div>
  </Router>,
  document.getElementById('root')
);
// registerServiceWorker();
