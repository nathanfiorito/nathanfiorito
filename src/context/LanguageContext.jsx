import React, { createContext, useState, useContext, useEffect } from 'react';
import { en } from '../locales/en';
import { pt } from '../locales/pt';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Check localStorage first
        const saved = localStorage.getItem('app-language');
        if (saved) return saved;
        // Check browser preference
        return navigator.language.startsWith('pt') ? 'pt' : 'en';
    });

    const [t, setT] = useState(language === 'pt' ? pt : en);

    useEffect(() => {
        localStorage.setItem('app-language', language);
        setT(language === 'pt' ? pt : en);
        // Optional: Update HTML lang attribute
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'pt' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
