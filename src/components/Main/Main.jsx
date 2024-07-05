import React, { useEffect, useState } from "react";
import ArticleSection from "../ArticleSection/ArticleSection";
import ContactSection from "../ContactSection/ContactSection";

const Main = () => {
  useEffect(() => {
    async function getArticles() {
      await getFirstArticles()
    }

    getArticles()
  }, [])

  const [articles, useArticles] = useState([])

  const getFirstArticles = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")

      const json = await response.json()

      const temp = []

      for (let index = 0; index < 6; index++) {
        temp.push({
          ...json[index],
          img: `https://picsum.photos/200/40${index}`,
          description: json[index].body
        })
        // console.log(json[index]);
      }

      useArticles(temp)

    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <main>
      <ArticleSection title={"Artigos recomendados"} articles={articles} />
      <ContactSection />
    </main>
  );
};

export default Main;
