
import React, { useEffect, useState } from 'react';
import route from '../routes/route'; 
const ArticleDetails = (props) => {
  const articleId = props.match.params.articleId; 
  const [article, setArticle] = useState(null);

  useEffect(() => {
    route(`articles/${articleId}`)
      .then(data => {
        setArticle(data);
      })
      .catch(error => {
        console.error('Erro ao carregar dados do artigo:', error);
      });
  }, [articleId]);

  return (
    <div>
      {article ? (
        <div>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <p>Autor: {article.author}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ArticleDetails;
