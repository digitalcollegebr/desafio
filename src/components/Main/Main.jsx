import React, { useState } from "react";
import ArticleSection from "../ArticleSection/ArticleSection";
import ContactSection from "../ContactSection/ContactSection";

const Main = () => {

  const [articles, useArticles] = useState([])

  const getFirstArticles = async () => {
    try {
      const response = (await fetch("https://jsonplaceholder.typicode.com/posts")).json()

      const temp = []

      for (let index = 0; index < 6; index++) {
        temp.push(response[index])
      }

      useArticles(temp)

    } catch (error) {
      console.log("error");
    }
  }

  return (
    <main>
      <ArticleSection title={"Artigos recomendados"} articles={[]} />
      <ContactSection />
    </main>
  );
};

export default Main;
