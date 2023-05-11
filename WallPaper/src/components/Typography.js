import React from "react";
import { Text } from "react-native";

const Typography = (props) => {
  return (
    <Text style={{color:props.color, fontSize:props.size}}>
      {props.children}
    </Text>
  );
};

export default Typography;