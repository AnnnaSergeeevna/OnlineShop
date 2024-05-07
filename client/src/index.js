import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import ItemStore from './store/ItemStore';
import BasketStore from './store/BasketStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null)
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    item: new ItemStore(),
    basket: new BasketStore()
  }}>
    <App />
  </Context.Provider>
);

reportWebVitals();

