import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import config from "../config";
import ArticleCard from "../components/ArticleCard";

class SelectedSource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?sources=${
          this.props.navigation.state.params.id
        }&apiKey=${config.API_KEY}`
      )
      .then(resp => {
        this.setState({ articles: resp.data.articles });
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

export default SelectedSource;
