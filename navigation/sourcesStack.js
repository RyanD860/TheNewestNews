import React from "react";
import { createStackNavigator } from "react-navigation";
import SourcesScreen from "../screens/SourcesScreen";
import SelectedSource from "../screens/SelectedSource";

const sourcesStack = createStackNavigator({
  Main: {
    screen: SourcesScreen,
    navigationOptions: {
      header: null
    }
  },
  "Selected Source": {
    screen: SelectedSource
  }
});
export default sourcesStack;
