import { useRoute } from '@react-navigation/native';
import * as React from "react";
import { View, Text, Button } from "react-native";

const ScreenB = () => {
    const route=useRoute();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>이것은 ScreenB입니다. 받은 값: {route.params?.value}</Text>
      <Button
        title="뒤로가기"
        onPress={() => {
          console.log("뒤로가기가 클릭됨");
        }}
      />
    </View>
  );
};

export default ScreenB;
