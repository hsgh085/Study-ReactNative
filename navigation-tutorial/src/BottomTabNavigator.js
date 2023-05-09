import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabA from './TabA';
import Ionicons from "@expo/vector-icons/Ionicons";
import NestedStackNavigator from './NestedStackNavigator';
const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={"TabA"}
        component={TabA}
        options={{ tabBarIcon: () => <Ionicons name="home" size={20} /> }}
      />
      <BottomTab.Screen
        name={"TabB"}
        component={NestedStackNavigator}
        options={{ tabBarIcon: () => <Ionicons name="settings" size={20} /> }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
