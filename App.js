import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigation from './src/Navigation/BottomNavigation'
import StackNavigation from './src/Navigation/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'


const App = () => {
  return (
    <NavigationContainer >
      <SafeAreaView style= {{flex:1}}>
      {/* <BottomNavigation/> */}
      <StackNavigation />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})