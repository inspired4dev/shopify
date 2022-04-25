import React, { useEffect, useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { Carousel } from "./components/Carousel/Carousel";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch(
      "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
    )
      .then((response) => {
        return response.json();
      })
      .then((articles) => {
        setArticle(articles);
      });
  }, []);
  return (
    <Layout>
      <Carousel images={article.images} />
      <Cart article={article} />
    </Layout>
  );
}

export default App;
