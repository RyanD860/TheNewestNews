import React from "react";
import { createStackNavigator } from "react-navigation";
import SearchScreen from "../screens/SearchScreen";

const searchStack = createStackNavigator({
  Main: {
    screen: SearchScreen,
    navigationOptions: {
      header: null
    }
  }
});
export default searchStack;
