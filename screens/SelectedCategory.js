import React, { Component } from "react";
import axios from "axios";
import { ScrollView } from "react-native";
import config from "../config";
import ArticleCard from "../components/ArticleCard";

class SelectedCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${
          this.props.navigation.state.params.category
        }&country=us&apiKey=${config.API_KEY}`
      )
      .then(resp => {
        this.setState({ articles: resp.data.articles });
        console.log(this.state.articles);
      })
      .catch(err => {
        console.log(err);
      });
  }
  renderArticles() {
    return this.state.articles.map(item => {
      return <ArticleCard article={item} key={item.publishedAt} />;
    });
  }
  render() {
    return <ScrollView>{this.renderArticles()}</ScrollView>;
  }
}

export default SelectedCategory;
