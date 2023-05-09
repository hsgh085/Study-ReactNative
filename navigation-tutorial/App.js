import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./src/ScreenA";
import ScreenB from "./src/ScreenB";
import NestedStackNavigator from "./src/NestedStackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabA from "./src/TabA";
import TabB from "./src/TabB";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomTabNavigator from "./src/BottomTabNavigator";
import { StyleSheet, View, Text } from "react-native";
import Typography from "./src/components/Typography";
import MyButton from "./src/components/MyButton";
import LocalImage from "./src/components/LocalImage";
import RemoteImage from "./src/components/RemoteImage";
import Icons from "./src/components/Icons";
import Badge from "./src/components/Badge";
import Button from "./src/components/Button";
import Divider from "./src/components/Divider";
import Spacer from "./src/components/Spacer";
import TabIcon from "./src/TabIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderWithoutCompound from "./src/components/HeaderWithoutCompound";
import Header from "./src/components/Header/Header";
import HookTestComponent from './src/components/HookTestComponent';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='ScreenA' component={ScreenA}/>
//         <Stack.Screen name='ScreenB' component={ScreenB}/>
//         <Stack.Screen name='NestedNavigator' component={NestedStackNavigator}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTab.Navigator>
//         <BottomTab.Screen
//           name={"TabA"}
//           component={TabA}
//           options={{ tabBarIcon: () => <Ionicons name="home" size={20} /> }}
//         />
//         <BottomTab.Screen
//           name={"TabB"}
//           component={NestedStackNavigator}
//           options={{ tabBarIcon: () => <Ionicons name="settings" size={20} /> }}
//         />
//       </BottomTab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name={'NestedBottomTab'} component={BottomTabNavigator}/>
//         <Stack.Screen name={'ScreenB'} component={ScreenB}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>왜 안돼</Text>
//       <Typography color="red" size={20}>
//         흐음
//       </Typography>
//       <Typography color="green" size={50}>
//         이제 잘되네
//       </Typography>
//       <MyButton title="props" />

//       <Divider/>
//       <Spacer space={20}/>
//       <LocalImage
//         localAsset={require("./assets/favicon.png")}
//         width={50}
//         height={50}
//       />
//       <Spacer space={20}/>
//       <Divider/>

//       <RemoteImage
//         url={"https://src.hidoc.co.kr/image/lib/2021/6/24/1624517344477_0.jpg"}
//         width={200}
//         height={100}
//       />
//       <Icons name="home" size={40} color="red" />
//       <View style={{ flexDirection: "row" }}>
//         <Badge size={10}>
//           <Typography>BADGE</Typography>
//         </Badge>
//         <Badge size={5}>
//           <Icons name="home" size={50} color="black" />
//         </Badge>
//       </View>
//       <View style={{ flexDirection: "row", marginTop:32 }}>
//         <Button onPress={()=>console.log('Pressed Button')}>
//           <Typography>TEXT BUTTON</Typography>
//         </Button>
//         <Button onPress={()=>console.log('Pressed Icon Button')}>
//           <Icons name='home' size={50} color="green"/>
//         </Button>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default function App() {
  const [a,setA]=React.useState(0);
  const [b,setB]=React.useState(0);
  const doSum=React.useCallback(()=>{
    return (a+b)
  },[a,b])
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        {/* <HeaderWithoutCompound title="Header" /> */}
        <Header>
          <Header.Group>
            <Header.Icon iconName="arrow-back" />
            <Header.Title title="HEADER" />
          </Header.Group>
          <Header.Icon iconName='close'/>
        </Header>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <HookTestComponent a={a} b={b}></HookTestComponent>
          <Typography>현재 callback으로 계산 된 값: {doSum()}</Typography>
          <Button onPress={()=>{
            console.log('press');
            setA(a+1)
          }}>
            <Typography>A더하기</Typography>
          </Button>
        </View>
      </View>
    </SafeAreaProvider>
  );
}