import React from "react";
import "./style.css";

const Article = ({ articleImg, title, description, path }) => {
  return (
    <article className="card">
      <a href={path}>
        <img src={articleImg} alt={title} />
        <div className="card-description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </article>
  );
};

export default Article;
