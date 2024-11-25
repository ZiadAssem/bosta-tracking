import React from 'react'
import logo from './../../assets/images/logo.svg';
import { useLanguageContext } from '../context/language_context';

const NavBar = () => {
  const context = useLanguageContext();
  const { language, toggleLanguage, t } = context;

  return (
    <div className='px-20 py-4 flex flex-row justify-between items-center'>

      <div onClick={() => {}} className=' flex-row flex justify-center items-center gap-2 cursor-pointer'>
        <img src={logo} className="w-12" alt="logo" />
        <h1 className='font-cairo text-primary font-extrabold text-3xl'>{t("bosta")} </h1>
      </div>

      <div className='flex flex-row gap-8 '>
        <button className='font-cairo text-secondary font-semibold text-xl'>{t("home")} </button>
        <button className='font-cairo text-secondary font-semibold text-xl'>{t("prices")} </button>
        <button className='font-cairo text-secondary font-semibold text-xl'>{t("contact sales")} </button>
      </div>

      <div className='flex flex-row gap-8 '>
        <button className='font-cairo text-secondary font-semibold text-xl'>{t("track shipment")} </button>
        <button className='font-cairo text-secondary font-semibold text-xl'>{t("login")} </button>
        <button onClick={toggleLanguage} className='font-cairo text-secondary font-semibold text-xl'>{t("language")} </button>
      </div>


    </div>
  )
}

export default NavBar