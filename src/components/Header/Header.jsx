import React from "react";

import "./style.css";

import headerImg from "../../assets/images/illustra.webp";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();

  const navigateAll = () =>{
    return navigate("/all")
  }

  return (
    <header>
      <div className="header-content container">
        <div className="header-image">
          <img src={headerImg} alt="Imagem ilustrativa de uma pessoa comemorando" />
        </div>
        <div className="header-description">
          <h1>Encontre os <span>melhores artigos</span> de programação em um só lugar</h1>
          <p>Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.</p>
          <a className="button" onClick={navigateAll}>Buscar artigos</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
