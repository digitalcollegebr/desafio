import React from "react";

import "./style.css";

const Article = ({ articleImg, title, description }) => {
  return (
    <article className="card">
      <img src={articleImg} alt={title} />
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Article;
