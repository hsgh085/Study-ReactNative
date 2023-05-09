import React from "react";
import { Image } from "react-native";
const LocalImage = (props) => {
  return (
    <Image
      source={props.localAsset}
      style={[props.style, { width: props.width, height: props.height }]}
    />
  );
};

export default LocalImage;
