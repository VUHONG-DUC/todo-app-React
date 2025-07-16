import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './store/store';
import { Provider } from 'react-redux';
const rootElement = document.getElementById('root');
//const root = ReactDOM.createRoot(rootElement);

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
};