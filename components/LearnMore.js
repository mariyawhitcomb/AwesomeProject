import React, { Component } from "react";
import { Button, Alert } from "react-native";
import Profile from "../components/Profile";

export default class LearnMore extends Component {
  onPressLearnMore = () => {
    Alert.alert("Thank you for pressing!");
  };
  render() {
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
