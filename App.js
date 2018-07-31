import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import categoryStack from "./stackNavs/categoryStack";
import sourcesStack from "./stackNavs/sourcesStack";
import TopStoriesScreen from "./screens/TopStoriesScreen";
import searchStack from "./stackNavs/searchStack";
export default createBottomTabNavigator(
  {
    "Top Stories": {
      screen: TopStoriesScreen,
      navigationOptions: {
        tabBarLabel: "Top Stories",
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"arrow-up"} size={30} color={tintColor} />
        )
      }
    },
    Sources: {
      screen: sourcesStack,
      navigationOptions: {
        tabBarLabel: "Sources",
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"pencil-square-o"} size={30} color={tintColor} />
        )
      }
    },
    Categories: {
      screen: categoryStack,
      navigationOptions: {
        tabBarLabel: "Categories",
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"braille"} size={30} color={tintColor} />
        )
      }
    },
    Search: {
      screen: searchStack,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"search"} size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#9966ff"
    }
  }
);
