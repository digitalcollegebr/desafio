import React, { useEffect, useState } from "react";
import Article from "../Article/Article";

import "./style.css";

const ArticleSection = () => {
  const [articles, setArticles] = useState([
    { img: "", title: "", description: "" },
  ]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/juanfernandez13/jsonPlaceHolder/db"
    );
    const data = await response.json();
    setArticles(data.data);
  };

  return (
    <section id="article-section" className="article-section">
      <div className="container">
        <h2>Artigos recomendados</h2>
        <div className="articles">
          {articles.map((article, index) => {
            return (
              <Article
                key={index}
                articleImg={article.img}
                title={article.title}
                description={article.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
