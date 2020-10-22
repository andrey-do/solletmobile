import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderReactDom = () => {
  setTimeout(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root'),
    );
  }, 3000);
  ReactDOM.render(
    <div style={{ width: '100%', height: '100%' }}>
      <img
        style={{ width: '100%', height: '125%' }}
        src="splash.png"
        alt="splash screen"
      />
    </div>,
    document.getElementById('root'),
  );
};

if (window.cordova) {
  document.addEventListener(
    'deviceready',
    () => {
      renderReactDom();
    },
    false,
  );
} else {
  renderReactDom();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
