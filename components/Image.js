import React, { Component } from "react";
import { Image } from "react-native";

export default class componentName extends Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png"
          }}
        />;
      </View>
    );
  }
}
