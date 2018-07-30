import { View, Text, Image, Linking, Alert, Button } from "react-native";
import React from "react";
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
  return (
    <View>
      <Image source={{ uri: urlToImage }} style={{ width: 200, height: 200 }} />
      <Text>{title}</Text>
      <Text>{author}</Text>
      <Text>{source.name}</Text>
      <Button title={"Read"} onPress={onPress} />
    </View>
  );
};
export default ArticleCard;
