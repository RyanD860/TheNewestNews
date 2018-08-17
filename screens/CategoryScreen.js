import React from "react";
import { View, Text, ScrollView } from "react-native";
import category from "../css/categoryStyle";
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
      <View style={{ flex: 1 }}>
        <Header />
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: "white"
          }}
        >
          <ScrollView scrollEnabled={false}>
            {this.renderCategories(categories)}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default CategoryScreen;
