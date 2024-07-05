import React from "react";
import Article from "../Article/Article";

import "./style.css";

import articleImg1 from "../../assets/images/image-1.webp";
import articleImg2 from "../../assets/images/image-2.webp";
import articleImg3 from "../../assets/images/image-3.webp";
import articleImg4 from "../../assets/images/image-4.webp";
import articleImg5 from "../../assets/images/image-5.webp";
import articleImg6 from "../../assets/images/image-6.webp";


const ArticleSection = ({title, articles}) => {
  return (
    <section id="article-section" className="article-section">
      <div className="container">
        <h2>{title}</h2>
        <div className="articles">
          {articles.map((article, index) => (
            <Article
              key={index}
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
