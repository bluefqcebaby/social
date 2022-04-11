import React from "react";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";

const container = document.getElementById('root');
const root = createRoot(container);


export const renderEntireTree = store => {
  root.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  );
};


renderEntireTree(store);
store.subscribe(() => {
  renderEntireTree(store);
});



