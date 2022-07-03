import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

