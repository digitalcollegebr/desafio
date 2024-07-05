import React from "react";

import "./style.css";

import headerImg from "../../assets/images/illustra.webp";


const Header = () => {
  return (
    <header>
      <div className="header-content container">
        <div className="header-image">
          <img src={headerImg} alt="Imagem ilustrativa de uma pessoa comemorando" />
        </div>
        <div className="header-description">
          <h1>Encontre os <span>melhores artigos</span> de programação em um só lugar</h1>
          <p>Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.</p>
          <a href="#article" className="button" onClick={GetPosts()}>Buscar artigos</a>
        </div>
      </div>
    </header>
  );
};

const GetPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default Header;GetPosts
