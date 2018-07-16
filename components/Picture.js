import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Picture extends Component {
  render() {
    return (
      <Image source={require("../photo-1531674590200-f5e4c43f31de.jpeg")} />
    );
  }
}
