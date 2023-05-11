import React from "react";
import Button from "../Button";
import Icons from "../Icons";

const HeaderIcon = (props) => {
  return (
    <Button onPress={props.onPress}>
      <Icons name={props.iconName} size={28} color="black" />
    </Button>
  );
};

export default HeaderIcon;