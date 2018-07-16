import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import Message from "./Message";

export default class Picture extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require("../photo-1531674590200-f5e4c43f31de.jpeg")}
      >
        <Message />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%"
  }
});
