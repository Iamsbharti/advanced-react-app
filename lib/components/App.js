import React, { Component } from "react";
import { data } from "../testData";
import DataApi from "../DataApi";
import ArticleList from "./ArticleList";

const api = new DataApi(data);
class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
    //console.log(this.state.articles);
  }
  authorActions = {
    lookUpAuthor: (authorId) => this.state.authors[authorId],
  };
  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          actions={this.authorActions}
        />
      </div>
    );
  }
}
export default App;
