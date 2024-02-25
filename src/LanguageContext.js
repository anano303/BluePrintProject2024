// LanguageContext.js
import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ge");

  const contextValue = {
    language,
    setLanguage: (newLanguage) => {
      document.body.setAttribute("data-language", newLanguage);
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
