import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import CategoryScreen from "./screens/CategoryScreen";
import SearchScreen from "./screens/SearchScreen";
import SourcesScreen from "./screens/SourcesScreen";
import TopStoriesScreen from "./screens/TopStoriesScreen";
export default createBottomTabNavigator({
  "Top Stories": TopStoriesScreen,
  Sources: SourcesScreen,
  Category: CategoryScreen,
  Search: SearchScreen
});
