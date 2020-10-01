import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//React Navigation Components
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const RootStack =  createStackNavigator();
/*Importing Screens*/
import HomeScreen from './screens/homeScreen';
import AboutScreen from './screens/aboutScreen'



export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
    
          if (route.name === 'Movies') {
            iconName = 'film';
          } else if (route.name === 'About') {
            iconName = 'information-circle';
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#2C2B33',
        inactiveBackgroundColor:'#2C2B33',
        activeTintColor: '#EF7F1D',
        inactiveTintColor: '#87868A',
        
      }}
    >
      <Tab.Screen name="Movies" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};
