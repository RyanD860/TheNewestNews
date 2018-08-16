import React from "react";
import { View, Text } from "react-native";
import header from "../css/headerStyle";

const Header = () => {
  return (
    <View style={header.container}>
      <Text style={header.text}>The Newest News</Text>
    </View>
  );
};

export default Header;
