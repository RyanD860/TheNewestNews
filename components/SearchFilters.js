import React from "react";
import { Picker, DatePickerIOS, View } from "react-native";

const SearchFilters = props => {
  return (
    <View>
      <Picker>
        <Picker.Item label="Relevancy" value="relevancy" />
        <Picker.Item label="Popularity" value="popularity" />
        <Picker.Item label="Published At" value="publishedAt" />
      </Picker>
      <DatePickerIOS date={new Date()} maximumDate={new Date()} mode="date" />
    </View>
  );
};
export default SearchFilters;
