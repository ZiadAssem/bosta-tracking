import { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../utils/il8n';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';


type Language = "en" | "ar";

type LanguageContextProviderProps = {
    children: React.ReactNode;
};
type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    toggleLanguage: () => { },
    t: (key: string) => key
});
export const useLanguageContext = () => useContext(LanguageContext)


export default function LanguageContextProvider({ children }: LanguageContextProviderProps) {
    const [language, setLanguage] = useState<Language>("en");
    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en");
        i18n.changeLanguage(language);
    }
    const lng = cookies.get('i18next') || 'en';
    useEffect(() => {
        console.log('lng', lng);
        window.document.dir = language == 'en' ? 'rtl' : 'ltr';
    }, [language, setLanguage, lng]);

    const { t } = useTranslation();
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}