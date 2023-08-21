import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigationBar from '../BottomNavigation'

import * as  Screens from '../../Screens'



const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
  <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerShown: false,
      }}>
      <Stack.Screen name="BottomNavigationBar" component={BottomNavigationBar} />
      <Stack.Screen name='ProfileScreen' component={Screens.ProfileScreen}/ >
      <Stack.Screen name='HomeScreen' component={Screens.HomeScreen}/ >
      <Stack.Screen name='DetailScreen' component={Screens.DetailScreen}/ >
  </Stack.Navigator>    
  )
}

export default StackNavigation
