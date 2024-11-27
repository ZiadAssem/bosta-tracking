import React, { useState } from 'react';
import logo from './../../assets/images/logo.svg';
import { useLanguageContext } from '../context/language_context';
import { CiSearch } from "react-icons/ci";
import { TrackDropDown } from './track_dropdown';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const { language, toggleLanguage, t } = useLanguageContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTrackShipmentClick = () => setIsDropdownOpen((prev) => !prev);
  const handleMobileMenuToggle = () => setIsMobileMenuOpen((prev) => !prev);

  const renderNavLinks = () => (
    <>
      <button className="font-cairo text-secondary font-semibold text-lg lg:text-xl mt-2 lg:mt-0">
        {t("home")}
      </button>
      <button className="font-cairo text-secondary font-semibold text-lg lg:text-xl mt-2 lg:mt-0">
        {t("prices")}
      </button>
      <button className="font-cairo text-secondary font-semibold text-lg lg:text-xl mt-2 lg:mt-0">
        {t("contact sales")}
      </button>
    </>
  );

  const renderActions = () => (
    <>
      {/* Track Shipment Button with Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)} 
        onMouseLeave={() => setIsDropdownOpen(false)} 
      >
        <button
          onClick={handleTrackShipmentClick}
          className={` text-secondary font-semibold text-lg lg:text-xl p-4 ${
            isDropdownOpen ? "rounded-t-md border-t border-l border-r border-gray-300" : ""
          }`}
        >
          {t("track shipment")}
        </button>
  
        {/* Track Dropdown */}
        <TrackDropDown isOpen={isDropdownOpen} />
      </div>
  
      {/* Login Button */}
      <button className="font-cairo text-secondary font-semibold text-lg lg:text-xl p-4">
        {t("login")}
      </button>
  
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="font-cairo font-bold text-lg lg:text-xl text-primary p-4"
      >
        {t("language")}
      </button>
    </>
  );
  

  return (
    <div className="px-5 sm:px-10 lg:px-20 flex flex-row justify-between items-center py-4">
      {/* Logo Section */}
      <div
        onClick={() => { }}
        className="flex flex-row justify-center items-center gap-2 cursor-pointer"
      >
        <img src={logo} className="w-12" alt="logo" />
        <h1 className="font-cairo text-primary font-extrabold text-2xl sm:text-3xl">
          {t("bosta")}
        </h1>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden">
        <button onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'
          } flex-col lg:flex-row lg:flex gap-8 lg:items-center items-center absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent z-10 lg:z-auto`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row gap-8">{renderNavLinks()}</div>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center">{renderActions()}</div>
      </div>
    </div>
  );
};

export default NavBar;
