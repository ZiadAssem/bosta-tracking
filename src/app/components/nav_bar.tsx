import React from 'react'
import logo from './../../assets/images/logo.svg';
import { useLanguageContext } from '../context/language_context';

const NavBar = () => {
  const context = useLanguageContext();
  const { language, toggleLanguage, t } = context;

  return (
    <div className='flex flex-row justify-between items-center'>

      <div className='flex-row flex justify-center items-center'>
      <img src={logo} className="w-12" alt="logo" />
      <h1 className='font-cairo text-primary font-extrabold text-3xl'>{t("bosta")} </h1>

      </div>

      <div className='flex flex-row gap-8 '>
        <h1 className='font-cairo text-secondary font-semibold text-xl'>{t("home")} </h1>
        <h1 className='font-cairo text-secondary font-semibold text-xl'>{t("prices")} </h1>
        <h1 className='font-cairo text-secondary font-semibold text-xl'>{t("contact sales")} </h1>
      </div>

      <div className='flex flex-row gap-8 '>
        <h1 className='font-cairo text-secondary font-semibold text-xl'>{t("track shipment")} </h1>
        <h1 className='font-cairo text-secondary font-semibold text-xl'>{t("login")} </h1>
        <button onClick={toggleLanguage} className='font-cairo text-secondary font-semibold text-xl'>{t("language")} </button>
      </div>


    </div>
  )
}

export default NavBar