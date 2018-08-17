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
    borderColor: "#EEEBEA",
    paddingBottom: 10,
    width: (width * 80) / 100,
    textAlign: "center",
    fontFamily: "Source Sans Pro",
    fontSize: 20,
    marginBottom: 5
  },
  backgroundColor: {
    backgroundColor: "white"
  },
  buttonContainerThree: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonContainerTwo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
    paddingLeft: 100,
    paddingRight: 100
  },
  pageNumber: {
    fontSize: 20,
    fontFamily: "Source Sans Pro"
  }
});

export default search;
