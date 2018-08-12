import { StyleSheet } from "react-native";
Expo.Font.loadAsync({
  "Source Sans Pro": require("../assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf")
});
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
    textDecorationLine: "underline",
    fontFamily: "Source Sans Pro"
  },
  text: {
    flex: 1,
    paddingLeft: 5
  },
  source: {
    fontSize: 12,
    padding: 3,
    fontFamily: "Source Sans Pro"
  }
});

export default article;
