import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BrandStore from "./store/BrandStore";
import CategoryStore from "./store/CategoryStore";
import ProductStore from "./store/ProductStore";
import UserStore from "./store/UserStore";
import AppStore from "./store/AppStore";

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          appContext: new AppStore(),
          brandContext: new BrandStore(),
          categoryContext: new CategoryStore(),
          productContext: new ProductStore(),
          userContext: new UserStore(),
      }}>
          <App />
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
