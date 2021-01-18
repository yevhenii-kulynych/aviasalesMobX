import React from 'react';
import ReactDOM from 'react-dom';
import { RootStoreContext } from "./context/StoreContext";
import { rootStore } from "./context/StoreContext";
import App from './App';
import './index.css';



ReactDOM.render(
  <RootStoreContext.Provider value={ rootStore }>
    <App />
  </RootStoreContext.Provider>,
  document.getElementById('root')
);

