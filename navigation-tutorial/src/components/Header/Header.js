import React from "react";
import { Dimensions, View } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import HeaderTitle from './HeaderTitle';
import HeaderIcon from './HeaderIcon';
import Spacer from '../Spacer';
import HeaderGroup from './HeaderGroup';
const { width } = Dimensions.get("window");

const Header = (props) => {
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
              alignItems: "center",
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
              {props.children}
            </View>
            <Spacer horizontal={true} space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default Header;
Header.Title=HeaderTitle;
Header.Icon=HeaderIcon;
Header.Group=HeaderGroup;