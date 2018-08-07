import React from "react";
import { View, ScrollView } from "react-native";
import axios from "axios";
import config from "../config";
import ArticleCard from "../components/ArticleCard";
import screens from "../css/screenStyle";
class TopStoriesScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          config.API_KEY
        }`
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
      return <ArticleCard article={item} key={item.description} />;
    });
  }
  render() {
    return (
      <View style={screens.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderArticles()}
        </ScrollView>
      </View>
    );
  }
}

export default TopStoriesScreen;
