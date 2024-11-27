import { useLanguageContext } from "../context/language_context";

export const Welcome = () => {
    const context = useLanguageContext();
    const { t } = context;

    return (
        <div className="px-20 pb-20 gap-6 flex flex-col justify-center h-full w-full  align-center ">
                <p className="text-5xl font-bold text-center">
                    {t('welcome')} &nbsp;
                    <span className="text-primary">{t("bosta")}</span>
                </p>
                <p className="text-3xl font-bold text-center ">{t('first shipment')} &nbsp;</p>
        </div>
    );
}