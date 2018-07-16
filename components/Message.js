import React, { Component } from "react";
import { Text, View } from "react-native";
import style from "../styleSheet";

export default class Message extends Component {
  render() {
    return (
      <View>
        <Text style={style.text}> WELCOME TO NEW YORK </Text>
      </View>
    );
  }
}
