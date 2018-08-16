import { StyleSheet, Dimensions } from "react-native";
let { height } = Dimensions.get("window");
Expo.Font.loadAsync({
  "Source Sans Pro": require("../assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf")
});

const category = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "Source Sans Pro"
  },
  item: {
    borderBottomColor: "#EEEBEA",
    borderBottomWidth: 1,
    borderStyle: "solid",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: (height * 12.5) / 100
  }
});

export default category;
