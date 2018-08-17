import React from "react";
import { View, Text, Button } from "react-native";
import search from "../css/searchStyle";

const PageButtons = props => {
  return props.page > 1 ? (
    <View style={search.buttonContainerThree}>
      <Button
        title="Prev Page"
        onPress={() => props.handlePageChange("previous")}
        color={"#CA99EA"}
      />
      <Text style={search.pageNumber}>Page: {props.page}</Text>
      <Button
        title="Next Page"
        onPress={() => props.handlePageChange("next")}
        color={"#CA99EA"}
      />
    </View>
  ) : (
    <View style={search.buttonContainerTwo}>
      <Text style={search.pageNumber}> Page: {props.page}</Text>
      <Button
        title="Next Page"
        onPress={() => props.handlePageChange("next")}
        color={"#CA99EA"}
      />
    </View>
  );
};

export default PageButtons;
