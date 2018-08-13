import React from "react";
import { View, Text, ScrollView } from "react-native";
import sources from "../css/sourcesStyle";
class CategoryScreen extends React.Component {
  constructor() {
    super();
  }
  renderCategories(categories) {
    return categories.map(item => {
      return (
        <View style={sources.item}>
          <Text
            onPress={() =>
              this.props.navigation.navigate("Selected Category", {
                category: item
              })
            }
            key={item}
            style={sources.text}
          >
            {item}
          </Text>
        </View>
      );
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
