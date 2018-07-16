var React = require("react-native");

var myStyles = React.StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20,
    fontStyle: "italic"
  },
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    margin: 30,
    borderRadius: 10
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

module.exports = myStyles;
