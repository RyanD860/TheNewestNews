import React from "react";
import { createStackNavigator } from "react-navigation";
import CategoryScreen from "../screens/CategoryScreen";
import SelectedCategory from "../screens/SelectedCategory";
import Header from "../components/Header";

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
