"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonStyle = void 0;
var _reactNative = require("react-native");
var buttonStyle = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: "lightblue"
  }
});
exports.buttonStyle = buttonStyle;