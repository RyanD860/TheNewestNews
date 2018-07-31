import React from "react";
import { View, Text, TextInput, Alert } from "react-native";
class SearchScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: ""
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    if (this.state.userInput === "") {
      Alert.alert("Please Enter Search", null, [
        {
          text: "Dismiss",
          onPress: () => console.log("Dismiss was pressed")
        }
      ]);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          placeholder={"Enter Search..."}
          value={this.state.userInput}
          onChangeText={text => this.setState({ userInput: text })}
        />
      </View>
    );
  }
}

export default SearchScreen;
