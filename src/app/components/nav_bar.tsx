import React, { useState } from 'react';
import logo from './../../assets/images/logo.svg';
import { useLanguageContext } from '../context/language_context';
import { CiSearch } from "react-icons/ci";
import { TrackDropDown } from './track_dropdown';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const context = useLanguageContext();
  const { language, toggleLanguage, t } = context;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleTrackShipmentClick = () => {
    setIsDropdownOpen((prev: boolean) => !prev);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev: boolean) => !prev);
  };

  return (
    <div className='px-5 sm:px-10 lg:px-20 flex flex-row justify-between items-center py-4'>

      {/* Logo Section */}
      <div
        onClick={() => { }}
        className='flex flex-row justify-center items-center gap-2 cursor-pointer'
      >
        <img src={logo} className="w-12" alt="logo" />
        <h1 className='font-cairo text-primary font-extrabold text-2xl sm:text-3xl'>{t("bosta")}</h1>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden">
        <button onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col lg:flex-row lg:flex gap-8 ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } lg:items-center absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent z-10 lg:z-auto`}
      >
        <button className='font-cairo text-secondary font-semibold text-lg lg:text-xl'>{t("home")}</button>
        <button className='font-cairo text-secondary font-semibold text-lg lg:text-xl'>{t("prices")}</button>
        <button className='font-cairo text-secondary font-semibold text-lg lg:text-xl'>{t("contact sales")}</button>
      </div>

      {/* Actions Section */}
      <div
        className={`flex-col lg:flex-row lg:flex gap-4 ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } lg:items-center absolute lg:relative top-28 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent z-10 lg:z-auto`}
      >
        {/* Track Shipment Button */}
        <div className="relative">
          <button
            onClick={handleTrackShipmentClick}
            className={`font-cairo text-secondary font-semibold text-lg lg:text-xl p-4 ${
              isDropdownOpen ? 'rounded-t-md border-t border-l border-r border-gray-300' : ''
            }`}
          >
            {t("track shipment")}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && <TrackDropDown />}
        </div>

        {/* Other Actions */}
        <button className='font-cairo text-secondary font-semibold text-lg lg:text-xl'>{t("login")}</button>
        <button
          onClick={toggleLanguage}
          className='font-cairo font-bold text-lg lg:text-xl text-primary'
        >
          {t("language")}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
