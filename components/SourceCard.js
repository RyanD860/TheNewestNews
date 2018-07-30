import { View, Text } from "react-native";
import React from "react";
const SourceCard = props => {
  const { name } = props.source;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
export default SourceCard;
