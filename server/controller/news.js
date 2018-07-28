const axios = require("axios");
require("dotenv").config();
const newsAPI = "https://newsapi.org";
// API requests to fetch data from the NEWSAPI
module.exports = {
  // Grabs the most popular headlines for the day
  getTopHeadlines: (req, res, next) => {
    console.log("ran");
    axios
      .get(
        `${newsAPI}/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
      )
      .then(resp => {
        res.status(200).send(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  // Grabs all of the news sources available
  getSources: (req, res, next) => {
    axios
      .get(`${newsAPI}/v2/sources?language=en&apiKey=${process.env.API_KEY}`)
      .then(resp => {
        res.status(200).send(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  // Gets top headlines by category
  getTopHeadLinesByCategory: (req, res, next) => {
    axios
      .get(
        `${newsAPI}/v2/top-headlines?category=${
          req.params.category
        }&country=us&apiKey=${process.env.API_KEY}`
      )
      .then(resp => {
        res.status(200).send(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  // Grabs headlines from a search
  getTopHeadlinesFromSearch: (req, res, next) => {
    axios
      .get(
        `${newsAPI}/v2/everything?q=${req.params.search}&page${
          req.params.page
        }&sortBy=${req.params.sortby}&apiKey=${process.env.API_KEY}`
      )
      .then(resp => {
        res.status(200).send(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  // Grabs headlines by source
  getNewsBySource: (req, res, next) => {
    axios
      .get(
        `${newsAPI}/v2/everything?sources=${req.params.source}&page=${
          req.params.page
        }&sortBy=${req.params.sortby}&apiKey=${process.env.API_KEY}`
      )
      .then(resp => {
        res.status(200).send(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
