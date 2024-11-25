import React from 'react';
import logo from './../assets/images/logo.svg';
import './../App.css';
import {  useTranslation } from 'react-i18next';
import './utils/il8n';
import NavBar from './components/nav_bar';
import LanguageContextProvider from './context/language_context';



function App() {
  const {t} = useTranslation();
  return (
   <LanguageContextProvider>
     <div className='  bg-white px-20 py-4' >
        <NavBar />
        
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
    </div>
   </LanguageContextProvider>
  );
}

export default App;
