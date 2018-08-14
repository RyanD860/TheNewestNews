import { StyleSheet, Dimensions } from "react-native";
let { width } = Dimensions.get("window");
Expo.Font.loadAsync({
  "Source Sans Pro": require("../assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf")
});

const search = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  textBox: {
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "red",
    paddingBottom: 10,
    width: (width * 80) / 100
  }
});

export default search;
