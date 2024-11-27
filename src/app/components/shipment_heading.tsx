import { useTranslation } from 'react-i18next';
import { ShipmentInfo } from './../models/shipment_info_model';
import Divider from './divider';
import { CANCELLED_STATES, COMPLETED_STATES } from '../constants/shipment_state';
import { ProgressBar } from './shipment_progress_bar';
import { useLanguageContext } from '../context/language_context';


interface ShipmentHeadingProps {
    shipment: ShipmentInfo;
}

export const ShipmentHeading = ({ shipment }: ShipmentHeadingProps) => {
    const context = useLanguageContext();
    const { language, toggleLanguage, t } = context;
    const textAlign = language === "en" ? "text-left" : "text-right";
    return (
        <div className="border rounded-md mt-10 p-5">
            {/* Shipment Information Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex flex-col gap-2 text-start">
                    <p className="text-gray-600 font-semibold text-base sm:text-lg">
                        {t("shipment number")} {shipment.trackingNumber}
                    </p>
                    <p
                        className={`font-bold text-lg sm:text-xl ${COMPLETED_STATES.includes(shipment.currentStatus.state)
                            ? "text-green"
                            : CANCELLED_STATES.includes(shipment.currentStatus.state)
                                ? "text-primary"
                                : "text-yellow-300"
                            }`}
                    >
                        {t(shipment.currentStatus.state)}
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-start">
                    <p className="text-gray-600 font-semibold text-base sm:text-lg">
                        {t("LAST_UPDATE")}
                    </p>
                    <p className="font-bold text-lg sm:text-xl">
                        {t(new Date(shipment.currentStatus?.timestamp).toLocaleDateString("en-US", { weekday: "long" }))}
                        {" at "}
                        {new Date(shipment.currentStatus?.timestamp)
                            .toLocaleTimeString("en-us", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                            })
                            .replace(" ", "")}
                        {" "}
                        {new Date(shipment.currentStatus?.timestamp).toLocaleDateString("en-GB")}
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-start">
                    <p className="text-gray-600 font-semibold text-base sm:text-lg">{t("PROVIDER")}</p>
                    <p className="font-bold text-lg sm:text-xl">{t(shipment.provider)}</p>
                </div>
                <div className="flex flex-col gap-2 text-start">
                    <p className="text-gray-600 font-semibold text-base sm:text-lg">{t("PROMISED_DATE")}</p>
                    <p className="font-bold text-lg sm:text-xl">
                        {new Date(shipment.currentStatus?.timestamp).toLocaleDateString("en-GB", { day: "numeric" })}{" "}
                        {t(new Date(shipment.currentStatus?.timestamp).toLocaleDateString("en-GB", { month: "short" }))}{" "}
                        {new Date(shipment.currentStatus?.timestamp).toLocaleDateString("en-GB", { year: "numeric" })}
                    </p>
                </div>
            </div>

            <Divider />

            {/* ProgressBar Section */}
            <ProgressBar />

            <div className="flex flex-row justify-between p-5">
                <p className=' font-semibold text-lg'>{t("TICKET_CREATED")} </p>
                <p className=' font-semibold text-lg'>{t("PACKAGE_RECEIVED")} </p>
                <p className=' font-semibold text-lg'>{t("PACKAGE_OUT_FOR_DELIVERY")} </p>
                <p className=' font-semibold text-lg'>{t("PACKAGE_DELIVERED")} </p>

            </div>

        </div>
    );
};
