import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react'
import { useLanguageContext } from "../context/language_context";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchShipment } from "../redux/shipment_slice";

export const TrackDropDown = () => {
    const context = useLanguageContext();
    const { language, toggleLanguage, t } = context;
    const [trackingNumber, setIsTrackingNumber] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();


    return (
        <div className={`absolute w-80 bg-white p-4 rounded-b-lg border-2 shadow-lg  ${language=='en'?'left-0 rounded-r-lg ':'right-0 rounded-l-lg ' } `}>
            <h3 className="font-cairo text-primary font-semibold text-lg">
                {t("track shipment")}
            </h3>
            <CiSearch
                color='white'
                size={42}
                onClick={() => {
                     console.log(trackingNumber) 
                    dispatch(fetchShipment(trackingNumber))
                    }}
                className={`bg-primary  absolute mt-2 ${language=='en'?'left-3 rounded-l-md':'right-3 rounded-r-md' } `}
            />
            <input
                type="text"
                placeholder={t("Enter your tracking number")}
                onChange={(e) => {
                    setIsTrackingNumber(e.target.value)
                }
                }
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    )
}