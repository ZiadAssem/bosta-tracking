import { useLanguageContext } from "../context/language_context";

export const Welcome = () => {
    const context = useLanguageContext();
    const { t } = context;

    return (
        <div className="px-20 gap-6 flex flex-col justify-center h-[100vh] ">
            <div className="flex flex-row justify-center items-center ">
                <p className="text-5xl font-bold ">{t('welcome')} &nbsp;</p>
                <p className="text-5xl text-primary font-bold">{t("bosta")}</p>
            </div>

                <p className="text-3xl font-bold text-center ">{t('first shipment')} &nbsp;</p>
        </div>
    );
}