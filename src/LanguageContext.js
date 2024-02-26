// LanguageContext.js
import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ge");

  useEffect(() => {
    document.body.style.fontFamily =
      language === "en"
        ? "supreme, sans-serif"
        : "BPGNinoMtavruliNormal, sans-serif";
  }, [language]);
  console.log(language);

  const contextValue = {
    language,
    setLanguage: (newLanguage) => {
      setLanguage(newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
