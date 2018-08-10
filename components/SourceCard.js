import { View, Text } from "react-native";
import React from "react";
import sources from "../css/sourcesStyle";
const SourceCard = props => {
  const { name, id } = props.source;
  return (
    <View style={sources.item}>
      <Text
        style={sources.text}
        onPress={() => props.navigate.navigate("Selected Source", { id })}
      >
        {name}
      </Text>
    </View>
  );
};
export default SourceCard;
