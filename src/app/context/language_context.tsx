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
    const lng = cookies.get('i18next') || 'en';
    const [language, setLanguage] = useState<Language>(lng as Language);
    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en");
        // i18n.changeLanguage(language);
    }
   
    useEffect(() => {
        console.log('language', language);
        window.document.dir = language == 'en' ? 'ltr' : 'rtl';
        i18n.changeLanguage(language);
    }, [language]);

    const { t } = useTranslation();
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}