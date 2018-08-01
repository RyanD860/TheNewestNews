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
    if (!this.state.userInput) {
      Alert.alert("Please Enter Search", null, [
        {
          text: "Dismiss",
          onPress: () => console.log("Dismiss was pressed")
        }
      ]);
    } else {
      this.props.navigation.navigate("Search Ran", {
        search: this.state.userInput
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          placeholder={"Enter Search..."}
          value={this.state.userInput}
          onChangeText={userInput => this.setState({ userInput })}
          onSubmitEditing={this.onSearch}
          returnKeyType="search"
        />
      </View>
    );
  }
}

export default SearchScreen;
