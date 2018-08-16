import React from "react";
import { View, Text, ScrollView } from "react-native";
import category from "../css/categoryStyle";
import sources from "../css/sourcesStyle";
import Header from "../components/Header";
class CategoryScreen extends React.Component {
  constructor() {
    super();
  }
  renderCategories(categories) {
    let i = 0;
    return categories.map((item, i) => {
      return (
        <View style={category.item} key={i}>
          <Text
            onPress={() =>
              this.props.navigation.navigate("Selected Category", {
                category: item
              })
            }
            style={category.text}
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
        <Header />
        <ScrollView scrollEnabled={false}>
          {this.renderCategories(categories)}
        </ScrollView>
      </View>
    );
  }
}

export default CategoryScreen;
