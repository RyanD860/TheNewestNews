import React, { Component } from "react";
import axios from "axios";
import { ScrollView, View } from "react-native";
import config from "../config";
import moment from "moment";
import ArticleCard from "../components/ArticleCard";
import SearchFilters from "../components/SearchFilters";

class SearchRanScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      sortBy: "relevancy",
      from: null,
      to: null
    };
    this.handleSortBy = this.handleSortBy.bind(this);
  }

  componentDidMount() {
    let today = new Date();
    let weekBefore = new Date(today.getTime());
    weekBefore.setDate(today.getDate() - 7);
    this.setState({ from: weekBefore.toISOString(), to: today.toISOString() });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.from !== this.state.from && prevState.to !== this.state.to) ||
      prevState.sortBy !== this.state.sortBy
    ) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${
            this.props.navigation.state.params.search
          }&sortBy=${this.state.sortBy}&from=${this.state.from}&to=${
            this.state.to
          }&language=en&apiKey=${config.API_KEY}`
        )
        .then(resp => {
          this.setState({ articles: resp.data.articles });
        })
        .catch(err => console.log(err));
    }
  }
  handleSortBy(sortBy) {
    this.setState({ sortBy });
  }

  renderArticles() {
    return this.state.articles.map(item => {
      return <ArticleCard article={item} key={item.publishedAt} />;
    });
  }

  render() {
    return (
      <View>
        <SearchFilters
          from={this.state.from}
          to={this.state.to}
          sortBy={this.state.sortBy}
          handleSortBy={this.handleSortBy}
        />
        <ScrollView>{this.renderArticles()}</ScrollView>
      </View>
    );
  }
}

export default SearchRanScreen;
