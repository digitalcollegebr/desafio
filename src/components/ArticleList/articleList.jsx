import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../Article/Article';

const ArticlesList = ({ articles }) => {
  return (
    <div className="articles-list">
      {articles.map(article => (
        <Link key={article.id} to={`/article/${article.id}`}>
          <Article
            articleImg={article.image}
            title={article.title}
            description={article.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default ArticlesList;
