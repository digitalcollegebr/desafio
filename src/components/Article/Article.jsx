import React from "react";

import "./style.css";
import { redirect } from "react-router-dom";

const Article = ({ articleImg, title, description }) => {
  return (
    <article className="card" onClick={() => {redirect('/article') }}>
      <img src={articleImg} alt={title} />
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Article;
