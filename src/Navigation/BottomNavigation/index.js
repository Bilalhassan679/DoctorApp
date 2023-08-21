import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  * as Screens from '../../Screens'
import { Colors } from '../../Theme/Colors';
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextComponent from '../../Components/TextComponent';

const Tab = createBottomTabNavigator();
const colorFocused = focused => {
  return focused ? Colors.primaryColor : Colors.white;
};
export default function App() {
  const taBarComponent = React.useCallback( (iconName, title, last) => {
    return {
      tabBarIcon: ({focused, color, size}) => (
        <View style={styles.tabBarView(focused, last)}>
          <Ionicons
            name={focused ? iconName : `${iconName}-outline`}
            color={colorFocused(focused)}
            size={hp('2')}
          />
          {focused && (
            <TextComponent
              title={title}
              styles={{
                color: Colors.primaryColor,
                fontSize: hp('1.5'),
                // fontFamily: FontFamily.light,
              }}
            />
          )}
        </View>
      ),
      title: title,
      tabBarLabelStyle: styles.tabBarTitle,
    };
  },[]) 
  return (
      <Tab.Navigator>
      
        <Tab.Screen name="HomeScreen" component={Screens.HomeScreen} options={taBarComponent('home',"Home")} />
        <Tab.Screen name="ProfileScreen" component={Screens.ProfileScreen} options={taBarComponent('person',"Profile")}/>
        <Tab.Screen name="DetailScreen" component={Screens.DetailScreen} options={taBarComponent('settings',"Setting")}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarTitle: {
    display: 'none',
  },
  tabBarView: (focused, last) => ({
    width: focused ? wp('22') : 'auto',
    backgroundColor: focused ? Colors.white : 'transparent',
    height: focused ? hp('4') : 'auto',
    borderRadius: focused ? 10 : 0,
    marginLeft: focused && !last ? wp('2') : 0,
    alignItems: 'center',
    paddingHorizontal: wp('2'),
    justifyContent: 'center',
    marginTop:hp('2')
  }),
})