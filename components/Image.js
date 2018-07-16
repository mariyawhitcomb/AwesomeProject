import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Picture extends Component {
  render() {
    let pic = {
      uri: "http://bdfjade.com/data/out/154/6564985-random-picture.jpg"
    };
    return <Image source={pic} />;
  }
}
