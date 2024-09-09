import { createContext, useState } from "react";

export const LanguageContext = createContext('français')

export function LanguageContextProvider({children}) {
    const [language, setLanguage] = useState('français')

    const toggleLanguage = () => {
        setLanguage(language === 'français' ? 'anglais' : 'français')
    }    

    console.log(language);
    

    return <LanguageContext.Provider value={language}>
        <button onClick={toggleLanguage} className="button__toggle__language">Nom des pokémon en {language}</button>
        {children}
            </LanguageContext.Provider>
}