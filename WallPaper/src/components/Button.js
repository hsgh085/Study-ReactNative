import React from "react";
import { Pressable } from "react-native";

const Button = (props) => {
  return (
    <Pressable
    onPressIn={props.onPressIn}
    onPressOut={props.onPressOut}
      onPress={props.onPress}
      hitSlop={props.hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
    >
      {props.children}
    </Pressable>
  );
};

export default Button;
