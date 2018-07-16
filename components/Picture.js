import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import Message from "./Message";
import style from "../styleSheet";
import LearnMore from "./LearnMore";

export default class Picture extends Component {
  render() {
    return (
      <ImageBackground
        style={style.image}
        source={require("../photos/photo-1531674590200-f5e4c43f31de.jpeg")}
      >
        <Message />
        <LearnMore />
      </ImageBackground>
    );
  }
}
