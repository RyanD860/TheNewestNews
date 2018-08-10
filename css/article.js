import { StyleSheet } from "react-native";

const article = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderBottomColor: "#EEEBEA",
    borderBottomWidth: 1,
    borderStyle: "solid"
  },
  title: {
    fontSize: 17,
    padding: 3,
    textDecorationLine: "underline"
  }
});

export default article;
