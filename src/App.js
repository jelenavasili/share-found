import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Cards/Card";
import Nav from "./components/Nav/Nav";
import "./translations/i18n";

const App = () => {
  const [language, setLanguage] = useState("sr");
  const onLanguageChange = (lang) => {
    setLanguage(lang);
  };
  return (
    <div>
      <Nav onLanguageChange={onLanguageChange} />
      <Header />
      <Card language={language} />
      <Footer />
    </div>
  );
};

export default App;
