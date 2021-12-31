import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Cards/Card";
import Nav from "./components/Nav/Nav";
import "./translations/i18n";

/*comment*/
const App = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng");
    if (lang) {
      setLanguage(lang);
    }
  }, []);
  return (
    <div>
      <Nav />
      <Header />
      <Card language={language} />
      <Footer />
    </div>
  );
};

export default App;
