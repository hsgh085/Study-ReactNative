import React from "react";
import { View } from "react-native";
import Badge from './Badge';
import Icons from './Icons';


const TabIcon = (props) => {
  if (props.visibleBadge) {
    return (
      <View>
        <Badge size={10}>
          <Icons name={props.iconName} size={20} color={props.iconColor} />
        </Badge>
      </View>
    );
  }
  return (
    <View>
      <Icons name={props.iconName} size={20} color={props.iconColor} />
    </View>
  );
};

export default TabIcon;