import React, { useState } from 'react'
import logo from './../../assets/images/logo.svg';
import { useLanguageContext } from '../context/language_context';
import { CiSearch } from "react-icons/ci";
import { TrackDropDown } from './track_dropdown';


const NavBar = () => {
  const context = useLanguageContext();
  const { language, toggleLanguage, t } = context;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleTrackShipmentClick = () => {
    setIsDropdownOpen((prev: boolean) => !prev);
  };

  return (
    <div className='px-20  flex flex-row justify-between items-center'>

      <div onClick={() => { }} className=' flex-row flex justify-center items-center gap-2 cursor-pointer py-4'>
        <img src={logo} className="w-12" alt="logo" />
        <h1 className='font-cairo text-primary font-extrabold text-3xl'>{t("bosta")} </h1>
      </div>

      <div className='flex flex-row gap-8 py-4 '>
        <button className='font-cairo text-secondary font-semibold text-xl'>{t("home")} </button>
        <button className='font-cairo text-secondary font-semibold text-xl'>{t("prices")} </button>
        <button className='font-cairo text-secondary font-semibold text-xl'>{t("contact sales")} </button>
      </div>

      <div className='flex flex-row gap-8  '>
        <div className="relative">
            <button
            onClick={handleTrackShipmentClick}
            className={`font-cairo text-secondary font-semibold text-xl p-4 ${isDropdownOpen ? 'rounded-t-md border-t border-l border-r border-gray-300 ' : ''}`}
            >
            {t("track shipment")}
            </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && ( <TrackDropDown/>)}
        </div>
        <button className='font-cairo text-secondary font-semibold text-xl'>{t("login")} </button>
        <button onClick={toggleLanguage} className='font-cairo font-bold text-xl text-primary'>{t("language")} </button>
      </div>

    </div>
  )
}

export default NavBar