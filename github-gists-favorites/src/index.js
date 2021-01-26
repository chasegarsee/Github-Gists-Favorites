import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from "./context/context"
import reportWebVitals from './reportWebVitals';
import { initDB } from "react-indexed-db"
import { DBConfig } from "./utilities/DBConfig"
import "bootstrap/dist/css/bootstrap.min.css"

initDB(DBConfig)

ReactDOM.render(
  <GithubProvider>
    <App />
  </GithubProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
