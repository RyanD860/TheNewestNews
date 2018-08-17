import React, { Component } from "react";
import axios from "axios";
import { ScrollView, View, Button, Text } from "react-native";
import config from "../config";
import moment from "moment";
import ArticleCard from "../components/ArticleCard";
import SearchFilters from "../components/SearchFilters";
import search from "../css/searchStyle";
import PageButtons from "../components/PageButtons";
class SearchRanScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      sortBy: "relevancy",
      from: null,
      to: null,
      page: 1
    };
    this.handleSortBy = this.handleSortBy.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
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
      prevState.sortBy !== this.state.sortBy ||
      prevState.page !== this.state.page
    ) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${
            this.props.navigation.state.params.search
          }&sortBy=${this.state.sortBy}&from=${this.state.from}&to=${
            this.state.to
          }&language=en&page=${this.state.page}&apiKey=${config.API_KEY}`
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

  handlePageChange(direction) {
    if (direction === "next") {
      this.setState({ page: this.state.page + 1 });
      this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    } else if (direction === "previous") {
      this.setState({ page: this.state.page - 1 });
      this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={search.backgroundColor}>
          {/* <SearchFilters
          from={this.state.from}
          to={this.state.to}
          sortBy={this.state.sortBy}
          handleSortBy={this.handleSortBy}
        /> */}
          <ScrollView
            ref={c => (this.scroll = c)}
            showsHorizontalScrollIndicator={false}
          >
            {this.renderArticles()}
            {this.state.articles.length > 0 && (
              <PageButtons
                page={this.state.page}
                handlePageChange={this.handlePageChange}
              />
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default SearchRanScreen;
