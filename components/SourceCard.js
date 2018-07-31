import { View, Text } from "react-native";
import React from "react";
const SourceCard = props => {
  const { name, id } = props.source;
  return (
    <View>
      <Text onPress={() => props.navigate.navigate("Selected Source", { id })}>
        {name}
      </Text>
    </View>
  );
};
export default SourceCard;
