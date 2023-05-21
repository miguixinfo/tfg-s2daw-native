import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/HomeScreen";
import StackScreen from "./screens/StackScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./screens/LoginScreen";
import ToolsScreen from "./screens/ToolsScreen";
import UsersScreen from "./screens/UsersScreen";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarColor: 'black'
    }}>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={25} />
        ),
        tabBarBadge: 10,

      }} />

      <Tab.Screen 
      name="Tools" 
      component={ToolsScreen}
      options={{
        tabBarLabel: 'Tools',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="tools" color={color} size={25} />
        ),
      }} />

      <Tab.Screen 
      name="Users" 
      component={UsersScreen}
      options={{
        tabBarLabel: 'Users',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={25} />
        ),
      }} />
      
      <Tab.Screen 
      name="Login" 
      component={LoginScreen}
      options={{
        tabBarLabel: 'Login',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="login" color={color} size={25} />
        ),
      }} />

    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}