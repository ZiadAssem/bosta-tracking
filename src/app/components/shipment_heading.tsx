import { useTranslation } from 'react-i18next';
import { ShipmentInfo } from './../models/shipment_info_model';
import Divider from './divider';
import { ShipmentProgressBar } from './shipment_progress_bar';


interface ShipmentHeadingProps {
    shipment: ShipmentInfo;
}

export const ShipmentHeading = ({ shipment }: ShipmentHeadingProps) => {
    const { t } = useTranslation();
    console.log('tracking number', shipment.trackingNumber);
    return (
        <div className='border rounded-md mt-10  '>
            <div className="flex flex-row justify-evenly p-5">

                <div className='flex flex-col gap-5 text-start' >
                    <p className='text-gray-600 font-semibold text-lg'>{t("shipment number")} {shipment.trackingNumber}</p>
                    <p className=' font-bold text-xl '> {t(shipment.currentStatus.state)}</p>
                </div>

                <div className='flex flex-col gap-5 text-start' >
                    <p className='text-gray-600 font-semibold text-lg'>{t("LAST_UPDATE")} </p>
                    <p className=' font-bold text-xl  '>
                        {t(new Date(shipment.currentStatus?.timestamp).toLocaleDateString('en-US', { weekday: 'long' }))}
                        {' '}
                        at
                        {' '}
                        {new Date(shipment.currentStatus?.timestamp).toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit', hour12: true }).replace(' ', '')}
                        {' '}

                        {new Date(shipment.currentStatus?.timestamp).toLocaleDateString('en-GB')}
                    </p>
                </div>

                <div className='flex flex-col gap-5 text-start' >
                    <p className='text-gray-600 font-semibold text-lg'>{t("PROVIDER")}</p>
                    <p className=' font-bold text-xl '> {t(shipment.provider)}</p>
                </div>
                <div className='flex flex-col gap-5 text-start' >
                    <p className='text-gray-600 font-semibold text-lg'>{t("PROMISED_DATE")}</p>
                    <p className=' font-bold text-xl '>
                        {new Date(shipment.currentStatus?.timestamp).toLocaleDateString('en-GB', { day: 'numeric', })}
                        {' '}
                        {t(new Date(shipment.currentStatus?.timestamp).toLocaleDateString('en-GB', { month: 'short', }))}
                        {' '}
                        {new Date(shipment.currentStatus?.timestamp).toLocaleDateString('en-GB', { year: 'numeric', })}
                    </p>
                </div>

            </div>
            <Divider />
            <ShipmentProgressBar />

            <h1>{shipment.currentStatus.state}</h1>

        </div>
    )

}