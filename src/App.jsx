import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./style.css";
import Article from "./components/Article/Article";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Article />
    </>
  );
};

export default App;
