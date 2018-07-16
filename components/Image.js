import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Image extends Component {
  render() {
    let pic = {
      uri: "http://bdfjade.com/data/out/154/6564985-random-picture.jpg"
    };
    return <Image> source={pic} </Image>;
  }
}
