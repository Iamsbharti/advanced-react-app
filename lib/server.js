import express from "express";
import config from "./config";
import serverRender from "./serverRender";
const app = express();

//render static content from public folder
app.use(express.static("public"));

//Define View Engine
app.set("view engine", "ejs");

//Use ServerRender to render react app on server
app.get("/", (req, res) => {
  const reactApp = serverRender();
  res.render("index", { answer: 42 });
});
app.listen(config.port, function listenHandler() {
  console.info(`Running on Port ${config.port}`);
});
