import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Icons = (props) => {
  return <Ionicons name={props.name} size={props.size} color={props.color} />;
};

export default Icons;