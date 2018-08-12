import { StyleSheet } from "react-native";
Expo.Font.loadAsync({
  "Source Sans Pro": require("../assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf")
});
const source = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white"
  },
  item: {
    borderBottomColor: "#EEEBEA",
    borderBottomWidth: 1,
    borderStyle: "solid",
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 10
  },
  text: {
    fontSize: 18,
    fontFamily: "Source Sans Pro"
  }
});

export default source;
