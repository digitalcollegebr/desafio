import React, { useEffect, useState } from "react";
import ArticleSection from "../ArticleSection/ArticleSection";
import ContactSection from "../ContactSection/ContactSection";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <main>
      <ArticleSection data={data} />
      <ContactSection />
    </main>
  );
};

export default Main;
