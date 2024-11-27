import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useLanguageContext } from "../context/language_context";
import { CANCELLED_STATES, COMPLETED_STATES } from "../constants/shipment_state";

export const ShipmentDetails = () => {
    const { t } = useTranslation();
    const { language } = useLanguageContext();
    const { shipment } = useSelector((state: RootState) => state.shipment);
    const textAlignment = language !== 'ar' ? 'text-right' : 'text-left';

    return (
        <div className=" min-w-[65%] mt-10 ">
            <p className="font-semibold text-lg">{t('SHIPMENT_DETAILS')}</p>
            <div className="border rounded-lg mt-5">
                {/* Header Row */}

                <div className="py-5 px-8 flex flex-row bg-gray-100">
                    <div className="w-[20%]">
                        <p className={`text-gray-400 font-semibold text-lg flex-1 p-1 ${textAlignment}`}>{t('BRANCH')}</p>
                    </div>
                    <div className="w-[20%]">
                        <p className={`text-gray-400 font-semibold text-lg flex-1 p-1 ${textAlignment}`}>{t('DATE')}</p>
                    </div>
                    <div className="w-[20%]">
                        <p className={`text-gray-400 font-semibold text-lg flex-1 p-1 ${textAlignment}`}>{t('TIME')}</p>
                    </div>

                    <p className={`text-gray-400 font-semibold text-lg flex-1 p-1 ${textAlignment}`}>{t('DETAILS')}</p>
                </div>

                {/* Dynamic Rows */}
                {shipment?.transitEvents?.map((event, index) => (
                    <div key={index} className="py-5 px-8 flex flex-row">
                        <div className="w-[20%]">
                            <p className={`text-gray-600 font-semibold text-lg flex-1 p-1 ${textAlignment}`}>
                                {event?.hub || ' '}
                            </p>
                        </div>
                        <div className="w-[20%]">
                            <p className={`text-gray-600 font-semibold text-lg flex-1 p-1 ${textAlignment}`}>
                                {new Date(event?.timestamp!).toLocaleDateString('en-GB')}
                            </p>
                        </div>
                        <div className="w-[20%]">
                            <p className={`text-gray-600 font-semibold text-lg flex-1 p-1 ${textAlignment}`}>
                                {new Date(event?.timestamp!).toLocaleTimeString('en-us', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true,
                                }).replace(' ', '')}
                            </p>
                        </div>
                        <p className={`text-gray-600 font-semibold text-lg flex-1 p-1 ${textAlignment}`}>
                            {t(event?.state!)}
                            <br />
                            <span className={`font-semibold ${COMPLETED_STATES.includes(shipment.currentStatus.state)
                            ? "text-green"
                            : CANCELLED_STATES.includes(shipment.currentStatus.state)
                                ? "text-primary"
                                : "text-yellow-300"
                            }`}>{event.reason ? t(event.reason) : ''}</span>
                        </p>

                    </div>
                ))}

            </div>
        </div>
    )
}