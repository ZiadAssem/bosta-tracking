import { CiSearch } from "react-icons/ci";
import React, { useState } from "react";
import { useLanguageContext } from "../context/language_context";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchShipment } from "../redux/shipment_slice";

export const TrackDropDown = ({ isOpen }: { isOpen: boolean }) => {
    const context = useLanguageContext();
    const { language, t } = context;
    const [trackingNumber, setTrackingNumber] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div
            className={`absolute w-80 lg:mt-4 bg-white p-6 border-2 shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[300px] opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-4"
                } ${language === "en" ? "left-0 rounded-r-lg" : "right-0 rounded-l-lg"}`}
        >
            <h3 className="font-cairo text-primary font-semibold text-lg">
                {t("track shipment")}
            </h3>
            <CiSearch
                color="white"
                size={42}
                onClick={() => {
                    console.log(trackingNumber);
                    dispatch(fetchShipment(trackingNumber));
                }}
                className={`bg-primary absolute mt-2 ${language === "en" ? "left-6 rounded-l-md" : "right-3 rounded-r-md"
                    }`}
            />
            <input
                type="text"
                placeholder={t("Enter your tracking number")}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    );
};
