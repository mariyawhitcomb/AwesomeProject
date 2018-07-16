import React from "react";
import { AppRegistry, StyleSheet, Image, Text, View } from "react-native";
import Image from "./components/Image";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://wallpaperbrowse.com/media/images/750814.jpg"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
});

AppRegistry.registerComponent("App", () => App);
