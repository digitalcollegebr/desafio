import React from "react";

import "./style.css";
import { useNavigate } from "react-router-dom";

const Article = ({ articleImg, title, description, id }) => {

  const navigate = useNavigate();

  const navigateToUnique = (id) => {
    console.log("ola");
    navigate(`/post/${id}`)
  }
  return (
    <article className="card" onClick={() => navigateToUnique(id)}>
      <img src={articleImg} alt={title} />
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Article;
