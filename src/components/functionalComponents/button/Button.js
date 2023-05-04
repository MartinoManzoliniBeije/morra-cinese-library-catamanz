import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { buttonStyle } from "./buttonStyle";

function CustomButton(props) {
  function buttonCallback(e) {
    props.callbackInput(e);
  }

  return (
    <View style={[buttonStyle.container, props.style]}>
      <TouchableOpacity onPress={buttonCallback} style={buttonStyle.button}>
        <Image source={props.source} />
        <Text>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton;
