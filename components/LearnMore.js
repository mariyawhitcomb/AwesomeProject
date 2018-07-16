import React, { Component } from "react";
import { Button } from "react-native";

export default class LearnMore extends Component {
  render() {
    onPressLearnMore = () => {
      alert("Thank you for pressing!");
    };
    return (
      <Button
        onPress={this.onPressLearnMore}
        title="Learn More"
        color="#841584"
        // accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}
