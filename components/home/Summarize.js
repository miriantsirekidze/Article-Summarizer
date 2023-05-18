import React from 'react'
import { Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const Summarize = ({onPress, theme}) => {

  return (
    <Pressable onPress={onPress} style={{flexDirection: 'row', alignItems: 'center'}}>
      <Ionicons name="newspaper-outline" size={20} color={theme} />
      <Text style={{fontSize: 18, margin: 5, color: theme}}>Summarize</Text>
    </Pressable>
  )
}

export default Summarize