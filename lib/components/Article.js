import React from "react";

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    fontSize: "0.8em",
    color: "#888",
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  },
};
const dateString = (date) => {
  return new Date(date).toDateString();
};
const Article = ({ article, action }) => {
  const author = action.lookUpAuthor(article.authorId);
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateString(article.date)}</div>
      <div style={styles.author}>
        By{" "}
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};
export default Article;
