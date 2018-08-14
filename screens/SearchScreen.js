import React from "react";
import {
  Text,
  TextInput,
  Alert,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Button
} from "react-native";
import search from "../css/searchStyle";
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={search.container}>
          <View>
            <TextInput
              placeholder={"Enter Search..."}
              value={this.state.userInput}
              onChangeText={userInput => this.setState({ userInput })}
              onSubmitEditing={this.onSearch}
              returnKeyType="search"
              style={search.textBox}
            />
          </View>
          {this.state.userInput !== "" && (
            <Button title="Search" onPress={this.onSearch} />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default SearchScreen;
