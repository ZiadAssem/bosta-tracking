import { useLanguageContext } from "../context/language_context";

export const Loading = () => {
    const context = useLanguageContext();
    const { t } = context;

    return (

    <div className="flex flex-col justify-center items-center h-full w-full  align-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-red-500"></div>
    </div>
    );
}