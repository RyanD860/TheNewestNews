// Dependencies
const port = 3050;
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

// Bringing in controller methods
const newsController = require("./controller/news");
const {
  getTopHeadlines,
  getSources,
  getTopHeadLinesByCategory,
  getTopHeadlinesFromSearch,
  getNewsBySource
} = newsController;

// Making instance of server
const app = express();
app.use(cors());
app.use(json());

//REST API

// GETS
app.get("/api/topnews", getTopHeadlines);
app.get("/api/sources", getSources);
app.get("/api/topnews/category/:category", getTopHeadLinesByCategory);
app.get(
  "/api/everything/search/:search/:sortby/:page",
  getTopHeadlinesFromSearch
);
app.get("/api/everything/source/:source/:sortby/:page", getNewsBySource);

// Server is listening
app.listen(port, () => {
  console.log(`App is running on port #${port}`);
});
