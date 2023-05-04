"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _buttonStyle = require("./buttonStyle");
var _gameUIStyle = _interopRequireDefault(require("../../hookComponents/gameUI/gameUIStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CustomButton(props) {
  function buttonCallback(e) {
    props.callbackInput(e);
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_buttonStyle.buttonStyle.container, props.style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: buttonCallback,
    style: _buttonStyle.buttonStyle.button
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: props.source
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _gameUIStyle.default.buttonText
  }, props.label)));
}
var _default = CustomButton;
exports.default = _default;