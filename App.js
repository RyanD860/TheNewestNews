import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }
  // componentDidMount() {
  //   axios
  //     .get("git /api/topnews")
  //     .then(resp => {
  //       this.setState({ articles: resp });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
