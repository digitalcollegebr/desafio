import React from "react";

import "./style.css";

import headerImg from "../../assets/images/image-1.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-content container">
        <div className="header-image">
          <img
            src={headerImg}
            alt="Imagem ilustrativa de uma pessoa comemorando"
          />
        </div>
        <div className="header-description">
          <h1>
            Encontre os <span className="bestsArticle">melhores artigos</span>{" "}
            de programação em um só lugar
          </h1>
          <p>
            Explore o topo da programação em um só lugar! Seu destino único para
            dicas e tendências atuais.
          </p>
          <Link to="/post" className="button">
            Buscar artigos
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
