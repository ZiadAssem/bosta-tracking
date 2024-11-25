import React from 'react';
import logo from './../assets/images/logo.svg';
import './../App.css';
import { initReactI18next, useTranslation } from 'react-i18next';
import './utils/il8n';



function App() {
  const {t} = useTranslation();
  return (
    <div className="App ">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="font-cairo"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         { t("bosta")}
        </a>
      </header>
    </div>
  );
}

export default App;
