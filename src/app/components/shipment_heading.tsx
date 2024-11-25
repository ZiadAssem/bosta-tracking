import { useTranslation } from 'react-i18next';
import { ShipmentInfo } from './../models/shipment_info_model';


interface ShipmentHeadingProps {
    shipment: ShipmentInfo;
}

export const ShipmentHeading = ({ shipment }: ShipmentHeadingProps) => {
    const { t } = useTranslation();
    console.log('tracking number', shipment.trackingNumber);

    return (
        <div className="flex flex-row border rounded-md mt-10 p-5 justify-evenly ">
            <div className='flex flex-col gap-5' >
                <p className='text-gray-600 font-semibold text-lg'>{t("shipment number")} {shipment.trackingNumber}</p>
                <p className='text-green font-bold text-xl ml-10'> {t(shipment.currentStatus.state)}</p>
            </div>
            <div className='flex flex-col gap-5' >
                <p className='text-gray-600 font-semibold text-lg'>{t("LAST_UPDATE")} </p>
                <p className='text-green font-bold text-xl ml-10'> {t(shipment.transitEvents.at(-1)?.timestamp?.toString() || '')}</p>
            </div>
        </div>
    )

}