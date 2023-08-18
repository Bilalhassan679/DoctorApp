import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  * as Screens from '../../Screens'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
      
        {/* <Tab.Screen name="HomeScreen" component={Screens.HomeScreen} /> */}
        <Tab.Screen name="ProfileScreen" component={Screens.ProfileScreen} />
        <Tab.Screen name="DetailScreen" component={Screens.DetailScreen} />
      </Tab.Navigator>
  );
}