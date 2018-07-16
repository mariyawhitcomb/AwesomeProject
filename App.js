import React from "react";
<<<<<<< HEAD
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
=======
import { StyleSheet, Text, View } from "react-native";
import Picture from "./components/Image";

export default class App extends React.Component {
  render() {
    return <Picture />;
>>>>>>> b1e12c69247f6d7c2e08dd5731eabda03f526755
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
});

AppRegistry.registerComponent("App", () => App);
