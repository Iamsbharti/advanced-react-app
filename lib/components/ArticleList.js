import React, { Component } from "react";
import Article from "./Article";
const ArticleList = (props) => {
  return (
    <div>
      <h2>Articles</h2>
      {Object.values(props.articles).map((article) => (
        <Article key={article.id} article={article} action={props.actions} />
      ))}
    </div>
  );
};
export default ArticleList;
