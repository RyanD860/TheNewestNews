import React, { Component } from "react";
import { Tabs } from "./navigation/tabNavigation";

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return <Tabs />;
  }
}

export default App;
