import React from "react";
import Article from "../Article/Article";

import "./style.css";
import { Link } from "react-router-dom";

const ArticleSection = ({ data }) => {
  return (
    <section id="article-section" className="article-section">
      <div className="container">
        <h2>Artigos recomendados</h2>
        <div className="articles">
          {data?.map((article, index) => (
            <Link to={`/post/${data?.id}`}>
              <Article
                key={index}
                articleImg={article.img}
                title={article.title}
                description={article.body}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
