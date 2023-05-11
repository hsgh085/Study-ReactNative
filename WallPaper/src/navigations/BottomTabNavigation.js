import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabIcon from '../components/TabIcon';
import FavoriteImageListScreen from '../screen/FavoriteImageListScreen';
import ImageListScreen from '../screen/ImageListScreen';
const Tabs=createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tabs.Navigator screenOptions={({route})=>({
            headerShown:false,
            tabBarIcon:({focused, color, size})=>{
                const getIconName=()=>{
                    if(route.name==='ImageList'){
                        return 'home'
                    }
                    if(route.name==='FavoriteImage'){
                        return 'star'
                    }
                }
                const iconName=getIconName();
                return(<TabIcon iconName={iconName} iconColor={color}/>)
            }
        })}>
            <Tabs.Screen name="ImageList" component={ImageListScreen}></Tabs.Screen>
            <Tabs.Screen name="FavoriteImage" component={FavoriteImageListScreen}></Tabs.Screen>
        </Tabs.Navigator>
    );
};

export default BottomTabNavigation;