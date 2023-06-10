import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

// screens
import HomeScreen from './screens/home/HomeScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ToolsScreen from './screens/tools/ToolsScreen'
import UsersScreen from './screens/users/UsersScreen'

const Tab = createMaterialBottomTabNavigator()

function MyTabs () {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarColor: 'black'
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={25} />
          )
          // tabBarBadge: 10

        }}
      />

      <Tab.Screen
        name='Tools'
        component={ToolsScreen}
        options={{
          tabBarLabel: 'Herramientas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='tools' color={color} size={25} />
          )
        }}
      />

      <Tab.Screen
        name='Users'
        component={UsersScreen}
        options={{
          tabBarLabel: 'Usuarios',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={25} />
          )
        }}
      />

    </Tab.Navigator>
  )
}

export default function Navigation () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
