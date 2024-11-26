import React, { useState, useEffect } from 'react';
import logo from './../../assets/images/logo.svg';
import { useLanguageContext } from '../context/language_context';
import { TrackDropDown } from './track_dropdown';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const context = useLanguageContext();
  const { toggleLanguage, t } = context;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleTrackShipmentClick = () => {
    setIsDropdownOpen((prev: boolean) => !prev);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev: boolean) => !prev);
  };

  // Close menu when clicking outside or pressing ESC
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      if (isMobileMenuOpen && menu && !menu.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="px-5 sm:px-10 lg:px-20 flex justify-between items-center py-4 bg-white z-50 relative">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} className="w-12" alt="logo" />
        <h1 className="font-cairo text-primary font-extrabold text-2xl sm:text-3xl">{t("bosta")}</h1>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden">
        <button onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden lg:flex gap-8 items-center">
        <button className="font-cairo text-secondary font-semibold text-xl">{t("home")}</button>
        <button className="font-cairo text-secondary font-semibold text-xl">{t("prices")}</button>
        <button className="font-cairo text-secondary font-semibold text-xl">{t("contact sales")}</button>
        <button onClick={handleTrackShipmentClick} className="font-cairo text-secondary font-semibold text-xl">
          {t("track shipment")}
        </button>
        <button className="font-cairo text-secondary font-semibold text-xl">{t("login")}</button>
        <button onClick={toggleLanguage} className="font-cairo font-bold text-xl text-primary">{t("language")}</button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div
            id="mobile-menu"
            className="lg:hidden fixed top-0 left-0 w-3/4 h-screen bg-white flex flex-col items-start gap-6 p-6 overflow-y-auto z-50"
          >
            <button className="font-cairo text-secondary font-semibold text-xl" onClick={handleMobileMenuToggle}>
              {t("home")}
            </button>
            <button className="font-cairo text-secondary font-semibold text-xl" onClick={handleMobileMenuToggle}>
              {t("prices")}
            </button>
            <button className="font-cairo text-secondary font-semibold text-xl" onClick={handleMobileMenuToggle}>
              {t("contact sales")}
            </button>
            <div className="relative w-full">
              <button
                onClick={handleTrackShipmentClick}
                className="font-cairo text-secondary font-semibold text-xl w-full text-left p-2"
              >
                {t("track shipment")}
              </button>
              {isDropdownOpen && <TrackDropDown />}
            </div>
            <button className="font-cairo text-secondary font-semibold text-xl" onClick={handleMobileMenuToggle}>
              {t("login")}
            </button>
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="font-cairo font-bold text-xl text-primary"
            >
              {t("language")}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
