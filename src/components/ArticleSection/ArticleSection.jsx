import React from "react";
import Article from "../Article/Article";

import "./style.css";
import { useNavigate } from "react-router-dom";

const ArticleSection = ({title, articles, returnbutton}) => {

 
  const returnFisrtPage = () =>{
    return navigate("/")
  }



  return (
    <section id="article-section" className="article-section">
      <div className="container">
        <div className="return-section">
          <h2>{title}</h2>
          {returnbutton && <button onClick={returnFisrtPage} >Voltar</button>}
        </div>
        <div className="articles">
          {articles.map((article, index) => (
            <Article
              key={index}
              id={article.id}
              articleImg={article.img}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
