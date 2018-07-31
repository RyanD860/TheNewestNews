import React from "react";
import { View, Text, ScrollView } from "react-native";
import config from "../config";
import axios from "axios";
import SourceCard from "../components/SourceCard";
class SourcesScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: []
    };
  }
  componentDidMount() {
    axios
      .get(`https://newsapi.org/v2/sources?apiKey=${config.API_KEY}`)
      .then(resp => {
        this.setState({ sources: resp.data.sources });
      })
      .catch(err => {
        console.log(err);
      });
  }
  renderSources() {
    return this.state.sources.map(item => {
      return (
        <SourceCard
          source={item}
          key={item.id}
          navigate={this.props.navigation}
        />
      );
    });
  }
  render() {
    return <ScrollView>{this.renderSources()}</ScrollView>;
  }
}

export default SourcesScreen;
