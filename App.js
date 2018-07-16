import React from "../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { StyleSheet, Text, View } from "react-native";
import Picture from "./components/Picture";

export default class App extends React.Component {
  render() {
    return <Picture />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
