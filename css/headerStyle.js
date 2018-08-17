import { StyleSheet, Dimensions } from "react-native";
let { width } = Dimensions.get("window");
Expo.Font.loadAsync({
  "Sedgwick Ave": require("../assets/fonts/Sedgwick_Ave/SedgwickAve-Regular.ttf")
});
const header = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "#B8B3BB",
    position: "relative"
  }
});

export default header;
