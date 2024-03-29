import React from "react";
import { TouchableOpacity,Text } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#4B778D",
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={()=>alert("Click!")}
    >
      <Text style={{fontSize:24, color:"white"}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
