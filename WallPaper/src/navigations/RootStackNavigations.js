import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import TabIcon from '../components/TabIcon';
import ImageDetailScreen from '../screen/ImageDetailScreen';
import BottomTabNavigation from './BottomTabNavigation';
const Stack=createNativeStackNavigator();
const RootStackNavigations = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="BottomTab" component={BottomTabNavigation}/>
            <Stack.Screen name="ImageDetail" component={ImageDetailScreen}/>
        </Stack.Navigator>
    );
};

export default RootStackNavigations;