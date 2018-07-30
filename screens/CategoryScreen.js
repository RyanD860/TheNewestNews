import React from "react";
import { View, Text, ScrollView } from "react-native";
class CategoryScreen extends React.Component {
  constructor() {
    super();
  }
  renderCategories(categories) {
    return categories.map(item => {
      return <Text key={item}>{item}</Text>;
    });
  }
  render() {
    let categories = [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology"
    ];

    return <ScrollView>{this.renderCategories(categories)}</ScrollView>;
  }
}

export default CategoryScreen;
