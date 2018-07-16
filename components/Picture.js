import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Picture extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={require("../photo-1531674590200-f5e4c43f31de.jpeg")}
      />
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
});
