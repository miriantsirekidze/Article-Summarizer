import React from 'react'
import { Text, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SummarizeAnother = ({onPress, theme}) => {
  return (
    <Pressable onPress={onPress} style={{flexDirection: 'row', alignItems: 'center'}}>
      <MaterialCommunityIcons name="restart" size={20} color={theme} />
      <Text style={{fontSize: 18, margin: 5, color: theme}}>Summarize Another Text</Text>
    </Pressable>
  )
}

export default SummarizeAnother