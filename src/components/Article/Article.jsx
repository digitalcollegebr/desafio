import React from "react";

import "./style.css";

const Article = ({ articleImg, title, description, link}) => {
  return (
    <article className="card" href="articles">
      <img src={articleImg} alt={title} />
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="Articles"></a>
      </div>
    </article>
  );
};

export default Article;
