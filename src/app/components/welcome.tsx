import { useLanguageContext } from "../context/language_context";

export const Welcome = () => {
    const context = useLanguageContext();
    const { t } = context;

    return (
        <div className="px-6 sm:px-10 md:px-20 pb-10 sm:pb-16 md:pb-20 gap-4 sm:gap-6 flex flex-col justify-center h-full w-full items-center text-center">
            <p className="text-2xl sm:text-4xl md:text-5xl font-bold">
                {t('welcome')} &nbsp;
                <span className="text-primary">{t("bosta")}</span>
            </p>
            <p className="text-lg sm:text-2xl md:text-3xl font-bold">
                {t('first shipment')} &nbsp;
            </p>
        </div>
    );
};
