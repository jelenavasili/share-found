import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/Cards/Info";
import Nav from "./components/Nav/Nav";

/*comment*/
const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
