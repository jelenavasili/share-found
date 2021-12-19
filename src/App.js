import React, {useState} from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Cards/Card";
import Nav from "./components/Nav/Nav";

/*comment*/
const App = () => {
  // 'sr' for Serbian, 'en' for English
  const [lang, setLang] = useState('sr');
  return (
    <div>
      <Nav />
      <Header lang={lang}/>
      <Card lang={lang}/>
      <Footer />
    </div>
  );
};

export default App;
