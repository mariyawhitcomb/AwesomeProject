import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Picture from "./components/Picture";
import Message from "./components/Message";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Picture />
        {/* <Text style={{ color: "red" }}>
          <Message />
        </Text> */}
      </View>
    );
  }
}
