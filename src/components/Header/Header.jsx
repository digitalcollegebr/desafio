import React from "react";
import "./style.css"; 
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-content container">
        <div className="header-image">
          <img className="logo-img" src={logo} alt="Imagem ilustrativa de uma pessoa comemorando" />
        </div>
        <div className="header-description">
          <h1>Encontre os <strong>melhores artigos</strong> de programação em um só lugar</h1>
          <p>Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.</p>
          <a href="https://www.alura.com.br/artigos/programacao">Buscar artigos</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
