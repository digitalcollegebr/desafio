import React from "react";

import "./style.css";
import { Link } from "react-router-dom";

const Article = ({ articleImg, title, description }) => {
  return (
    <article id="article" className="card">
      <Link to="/article1"><img src={articleImg} alt={title} /></Link>
      <div className="card-description">
        <h3><Link to="/article1">{title}</Link></h3>
        <p><Link to="/article1">{description}</Link></p>
      </div>
    </article>
  );
};

export default Article;
