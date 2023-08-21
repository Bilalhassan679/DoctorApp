import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Theme/Colors'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const TextComponent = ({onPress,title,styles}) => {
  return (
      <Text
      style={{...styles,color:Colors.blackColor,fontSize:heightPercentageToDP('2')}}
        onPress={onPress}
      >{title}
      </Text>
  )
}

export default TextComponent
