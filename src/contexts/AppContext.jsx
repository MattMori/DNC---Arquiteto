import { createContext, useEffect, useState } from 'react';
import { getApiData } from '../services/apiServices';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const saveLanguage = localStorage.getItem('lang'); 
    const [language, setLanguage] = useState(saveLanguage ?? 'br');
    const [languages, setLanguages] = useState();
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData('webText');
                setLanguages(getTexts);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        fetchLanguages();
    }, [])

    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language])
    


    return (
        <AppContext.Provider value={{ language, setLanguage, languages, loading }}>
            {children}
        </AppContext.Provider>


    )

}

