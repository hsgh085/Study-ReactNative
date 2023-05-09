import * as React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ScreenA = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>이것은 ScreenA입니다.</Text>
      <Button
        title="B스크린으로 이동하기"
        onPress={() => navigation.navigate("ScreenB", { value: "fromA" })}
      />
      <Button
        title="C스크린으로 이동하기"
        onPress={() => navigation.navigate("NestedNavigator", { screen: "ScreenC" })}
      />
    </View>
  );
};

export default ScreenA;
