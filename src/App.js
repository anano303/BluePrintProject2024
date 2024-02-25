import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
// import Header from "./Components/Header";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import React, { useState } from "react";
import { LanguageProvider } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("ge");
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <LanguageProvider>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Layout>
                      <Contact />
                    </Layout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <About />
                    </Layout>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <Layout>
                      <Services />
                    </Layout>
                  }
                />
                <Route
                  path="/portfolio"
                  element={
                    <Layout>
                      <Portfolio />
                    </Layout>
                  }
                />
              </Routes>
            </Router>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </LanguageProvider>
    </div>
  );
}

export default App;
