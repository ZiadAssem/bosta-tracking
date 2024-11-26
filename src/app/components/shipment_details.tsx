import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const ShipmentDetails = () => {
    const { t } = useTranslation();
    const { shipment } = useSelector((state: RootState) => state.shipment);


    return (
        <div className=" w-[65%] mt-10 ">
            <p className="font-semibold">{t('SHIPMENT_DETAILS')}</p>
            <div className="border rounded-lg mt-5">
                {/* Header Row */}

                <div className="p-5 flex flex-row bg-gray-100">
                    <p className="text-gray-400 font-semibold text-lg flex-1 text-center">{t('BRANCH')}</p>
                    <p className="text-gray-400 font-semibold text-lg flex-1 text-center">{t('DATE')}</p>
                    <p className="text-gray-400 font-semibold text-lg flex-1 text-center">{t('TIME')}</p>
                    <p className="text-gray-400 font-semibold text-lg flex-1 text-center">{t('DETAILS')}</p>
                </div>

                {/* Dynamic Rows */}
                {shipment?.transitEvents?.map((event, index) => (
                    <div key={index} className="p-5 flex flex-row">
                        <p className="text-gray-600 font-semibold text-lg flex-1 text-center">
                            {event?.hub || ' '}
                        </p>
                        <p className="text-gray-600 font-semibold text-lg flex-1 text-center">
                            {new Date(event?.timestamp!).toLocaleDateString('en-GB')}
                        </p>
                        <p className="text-gray-600 font-semibold text-lg flex-1 text-center">
                            {new Date(event?.timestamp!).toLocaleTimeString('en-us', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                            }).replace(' ', '')}
                        </p>
                        <p className="text-gray-600 font-semibold text-lg flex-1 text-center">
                            {t(event?.state!)}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
}