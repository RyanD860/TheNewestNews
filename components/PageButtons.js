import React from "react";
import { View, Text, Button } from "react-native";
import search from "../css/searchStyle";

const PageButtons = props => {
  return props.page > 1 ? (
    <View style={search.buttonContainer}>
      <Button
        title="Previous Page"
        onPress={() => props.handlePageChange("previous")}
        color={"#9966ff"}
      />
      <Text style={search.pageNumber}>Page: {props.page}</Text>
      <Button
        title="Next Page"
        onPress={() => props.handlePageChange("next")}
        color={"#9966ff"}
      />
    </View>
  ) : (
    <View style={search.buttonContainer}>
      <Text style={search.pageNumber}> Page: {props.page}</Text>
      <Button
        title="Next Page"
        onPress={() => props.handlePageChange("next")}
        color={"#9966ff"}
      />
    </View>
  );
};

export default PageButtons;
