import React from "react";
import "../Form/Form"
import "./style.css";

const Article = ({ articleImg, title, description, link}) => {
  return (
    <article className="card" href="Form">
      <img src={articleImg} alt={title} />
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}></a>
        
      </div>
    </article>
  );
};

export default Article;
