import React from "react";
import { createStackNavigator } from "react-navigation";
import CategoryScreen from "../screens/CategoryScreen";
import SelectedCategory from "../screens/SelectedCategory";

const categoryStack = createStackNavigator({
  Main: {
    screen: CategoryScreen,
    navigationOptions: {
      header: null
    }
  },
  "Selected Category": {
    screen: SelectedCategory
  }
});
export default categoryStack;
