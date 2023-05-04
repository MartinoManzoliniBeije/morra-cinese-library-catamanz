import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { buttonStyle } from "./buttonStyle";

function CustomButton(props) {
  function buttonCallback(e) {
    props.callbackInput(e);
  }

  return (
    <View style={buttonStyle.container}>
      <TouchableOpacity onPress={buttonCallback}>
        <Image source={props.source} />
        <Text>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton;
