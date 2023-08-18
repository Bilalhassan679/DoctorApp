import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation}) => {
  // function Navigation
  
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
      <Text onPress={()=>navigation.navigate('HomeScreen')} >ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})