import { StyleSheet, Dimensions } from "react-native";
let { width } = Dimensions.get("window");

const header = StyleSheet.create({
  container: {
    paddingTop: 15,
    position: "relative",
    borderBottomColor: "#EEEBEA",
    borderBottomWidth: 2,
    borderStyle: "solid",
    backgroundColor: "white"
  }
});

export default header;
