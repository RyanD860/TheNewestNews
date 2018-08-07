import { View, Text, Image, Linking, Alert, Button } from "react-native";
import React from "react";
import article from "../css/article";
const ArticleCard = props => {
  let { author, title, urlToImage, description, url, source } = props.article;
  if (!urlToImage) {
    urlToImage =
      "http://www.tourniagara.com/wp-content/uploads/2014/10/default-img.gif";
  }
  const onPress = () => {
    Alert.alert("Read Article", "Article will be opened in default browser", [
      {
        text: "Read",
        onPress: () => Linking.openURL(url)
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel was pressed"),
        style: "cancel"
      }
    ]);
  };
  const renderText = text => {
    let trim = text.substring(0, 100);
    trim.length === 50 ? (trim += "...") : trim;
    return trim;
  };
  return (
    <View style={article.container}>
      <Image source={{ uri: urlToImage }} style={{ width: 120, height: 120 }} />
      <View style={{ flex: 1, paddingLeft: 5 }}>
        <Text style={{ fontSize: 16, padding: 3 }}>{renderText(title)}</Text>
        <Text style={{ fontSize: 12, padding: 3 }}>{source.name}</Text>
      </View>
      <Button title={"Read"} onPress={onPress} color={"#9966ff"} />
    </View>
  );
};
export default ArticleCard;
