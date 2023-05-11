import React, { useCallback, useState } from "react";
import { Animated, useWindowDimensions } from "react-native";
import Button from "./Button";
import RemoteImage from "./RemoteImage";
import { useNavigation } from "@react-navigation/native";

const PhotoListItem = (props) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [ animValue ] = useState(new Animated.Value(0));

  const onPressItem = useCallback(() => {
    navigation.navigate("ImageDetail", { url: props.url });
  }, []);
  const onPressIn = useCallback(() => {
    console.log("onPressIn");
    Animated.timing(animValue,{
      duration:200,
      toValue:1
    }).start();
  }, []);
  const onPressOut = useCallback(() => {
    console.log("onPressOut");
    Animated.timing(animValue,{
      duration:200,
      toValue:0
    }).start();
  }, []);
  const scale = animValue.interpolate({
    inputRange: [0, 1], //animValue가 최초에는 0값이었다가, 1로 변하면
    outputRange: [1.0, 0.95], //1.0에서 0.95로 이동
  });
  return (
    <Button
      onPress={onPressItem}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      paddingHorizontal={20}
      paddingVertical={10}
    >
      <Animated.View style={{transform:[{scale:scale}]}}>
        <RemoteImage url={props.url} width={width - 40} height={width * 1.2} />
      </Animated.View>
    </Button>
  );
};

export default PhotoListItem;
