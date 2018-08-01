import React from "react";
import { createStackNavigator } from "react-navigation";
import SearchScreen from "../screens/SearchScreen";
import SearchRanScreen from "../screens/SearchRanScreen";

const searchStack = createStackNavigator({
  Main: {
    screen: SearchScreen,
    navigationOptions: {
      header: null
    }
  },
  "Search Ran": {
    screen: SearchRanScreen
  }
});
export default searchStack;
