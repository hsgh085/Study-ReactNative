import React from "react";
import { View } from "react-native";
import Badge from "./components/Badge";
import Icons from "./components/Icons";

const TabIcon = (props) => {
  if (props.visibleBadge) {
    return (
      <View>
        <Badge size={10}>
          <Icons name={props.iconName} size={20} color={"black"} />
        </Badge>
      </View>
    );
  }
  return (
    <View>
      <Icons name={props.iconName} size={20} color={"black"} />
    </View>
  );
};

export default TabIcon;
