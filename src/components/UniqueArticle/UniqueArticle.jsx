import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import './style.css'

const UniqueArticle = () => {

  const params = useParams()

  useEffect(() => {
    console.log(params);
    async function getArticles() {
      await getFirstArticles()
    }

    getArticles()
  }, [])

  const [article, useArticle] = useState({
    title: "",
    body: "",
    image: ""
  })


  const navigate = useNavigate();

  const returnFisrtPage = () =>{
    return navigate("/")
  }


  const getFirstArticles = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

      const json = await response.json()

      useArticle({
        ...json,
        image: "https://picsum.photos/600"
      })

    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <main className="unique-article container">
      <div className="return-section-unique">
        <h2>{article.title}</h2>
        <button onClick={returnFisrtPage} >Voltar</button>
      </div>
      <article className="card">
        <img src={article.image} alt={article.title} />
        <div className="card-description">
          <p>{article.body}</p>
        </div>
      </article>
    </main>
  );
};

export default UniqueArticle;
