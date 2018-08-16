import { StyleSheet, Dimensions } from "react-native";
let { width } = Dimensions.get("window");

const header = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#CA99EA",
    position: "relative"
  },
  text: {
    margin: "auto",
    bottom: 0,
    position: "relative",
    textAlign: "center"
  }
});

export default header;
