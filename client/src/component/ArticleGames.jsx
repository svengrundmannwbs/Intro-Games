import { useState, useEffect } from "react";
import useOwnAPI from "../hooks/useOwnAPI";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import "./article.css";

function ArticleGames() {
  const { response, loading, error } = useOwnAPI({
    method: "GET",
    url: "/articles",
  });

  const [articles, setArticles] = useState();
  useEffect(() => {
    if (response !== null) {
      setArticles(response);
    }
  }, [response]);

  // useEffect(() => {
  //   getContent("article", "").then((response) => setArticles(response));
  // }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <NavBar />
        <div className="gradient"></div>
        <div className="articlebg">
          <div className="container">
            {articles
              ? articles.map((article, key) => {
                  return (
                    <div
                      className="article"
                      key={key}
                      dangerouslySetInnerHTML={{
                        __html: article.richtext,
                      }}></div>
                  );
                })
              : "No Results"}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ArticleGames;
