import React from "react";
import { Dimensions, View } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Spacer from "./Spacer";
import Button from "./Button";
import Icons from "./Icons";
import Typography from "./Typography";
const { width } = Dimensions.get("window");

const HeaderWithoutCompound = (props) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{
              width: width,
              height: 56,
              flexDirection: "row",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
          >
            <Spacer horizontal={true} space={12} />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {props.leftIcon && (
                  <Button onPress={props.leftIcon.onPress}>
                    <Icons iconName={props.leftIcon.iconName} size={28} />
                  </Button>
                )}
                <Typography size={18}>{props.title}</Typography>
              </View>
              {props.rightIcon && (
                <Button onPress={props.rightIcon.onPress}>
                  <Icons iconName={props.rightIcon.iconName} size={28} />
                </Button>
              )}
            </View>
            <Spacer horizontal={true} space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default HeaderWithoutCompound;
