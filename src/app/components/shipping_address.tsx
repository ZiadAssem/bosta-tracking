import { useTranslation } from "react-i18next";

export const ShippingAddress = () => {
    const { t } = useTranslation();
    const ADDRESS = 'امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 ,,, Cairo';

    return (
        <div className="flex-1 mt-10">
            <p className="font-semibold text-lg">{t('SHIPPING_ADDRESS')}</p>
            <div className="border bg-gray-100 rounded-lg mt-5 p-5">
                <p>{ADDRESS}</p>
            </div>
        </div>
    );
};
