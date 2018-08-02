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
      from: "",
      to: ""
    };
  }

  componentDidMount() {
    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.replace(new RegExp(search, "g"), replacement);
    };
    let now = moment().format("YYYY MM DD");
    let oneWeekBefore = moment()
      .subtract(1, "d")
      .format("YYYY MM DD");
    this.setState({
      from: oneWeekBefore.replaceAll(" ", "-"),
      to: now.replaceAll(" ", "-")
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.from !== this.state.from && prevState.to !== this.state.to) {
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

  renderArticles() {
    return this.state.articles.map(item => {
      return <ArticleCard article={item} key={item.publishedAt} />;
    });
  }

  render() {
    return (
      <View>
        <SearchFilters from={this.state.to} />
        <ScrollView>{this.renderArticles()}</ScrollView>
      </View>
    );
  }
}

export default SearchRanScreen;
