import React from "react";
import { View, Text, ScrollView } from "react-native";
import sources from "../css/sourcesStyle";
class CategoryScreen extends React.Component {
  constructor() {
    super();
  }
  renderCategories(categories) {
    let i = 0;
    return categories.map((item, i) => {
      return (
        <View style={sources.item} key={i}>
          <Text
            onPress={() =>
              this.props.navigation.navigate("Selected Category", {
                category: item
              })
            }
            style={sources.text}
          >
            {item}
          </Text>
        </View>
      );
      i++;
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

    return (
      <View style={sources.container}>
        <ScrollView>{this.renderCategories(categories)}</ScrollView>
      </View>
    );
  }
}

export default CategoryScreen;
