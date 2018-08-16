import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import categoryStack from "./categoryStack";
import sourcesStack from "./sourcesStack";
import TopStoriesScreen from "../screens/TopStoriesScreen";
import searchStack from "./searchStack";

export const Tabs = createBottomTabNavigator(
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
      activeTintColor: "#CA99EA"
    }
  }
);
