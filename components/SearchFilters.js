import React, { Component } from "react";
import { Picker, DatePickerIOS, View, Button } from "react-native";

class SearchFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.sortBy !== state.sortBy) {
      return { sortBy: props.sortBy };
    }
    return null;
  }
  render() {
    let today = new Date();
    let weekBefore = new Date(today.getTime());
    weekBefore.setDate(today.getDate() - 7);
    return (
      <View>
        <Button
          title="Filter"
          onPress={() => this.props.handleSortBy(this.state.sortBy)}
        />
        <Picker
          selectedValue={this.state.sortBy}
          onValueChange={(item, i) => {
            this.setState({ sortBy: item });
          }}
        >
          <Picker.Item label="Relevancy" value="relevancy" />
          <Picker.Item label="Popularity" value="popularity" />
          <Picker.Item label="Published At" value="publishedAt" />
        </Picker>
        {/*<DatePickerIOS
        date={new Date()}
        maximumDate={weekBefore}
        mode="date"
        onDateChange={() => console.log("date changed")}
      />
      <DatePickerIOS
        date={new Date()}
        maximumDate={new Date()}
        mode="date"
        onDateChange={() => console.log("date changed")}
      /> */}
      </View>
    );
  }
}
export default SearchFilters;
