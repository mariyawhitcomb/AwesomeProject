import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Picture extends Component {
  render() {
    // let pic = {
    //   uri:
    //     "https://images.unsplash.com/photo-1531674590200-f5e4c43f31de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=44c88230f10a563c9dd67d6456dc1c35&auto=format&fit=crop&w=2850&q=80"

    return (
      <Image source={require("../photo-1531674590200-f5e4c43f31de.jpeg")} />
    );
  }
}
