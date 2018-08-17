import React, { Component } from "react";
import { View, Text } from "react-native";
import header from "../css/headerStyle";
import { AppLoading } from "expo";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      finishedLoading: false
    };
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      "Source Sans Pro Semi Bold Italic": require("../assets/fonts/Source_Sans_Pro/SourceSansPro-SemiBoldItalic.ttf")
    });
    this.setState({ finishedLoading: true });
  }
  render() {
    return this.state.finishedLoading ? (
      <View style={header.container}>
        <Text
          style={{
            margin: "auto",
            bottom: 0,
            position: "relative",
            textAlign: "center",
            fontFamily: "Source Sans Pro Semi Bold Italic",
            fontSize: 26
          }}
        >
          The Newest News
        </Text>
      </View>
    ) : (
      <AppLoading />
    );
  }
}

export default Header;
