import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import HelloMessage from './HelloMessage';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HelloMessage name="aaaa" />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
