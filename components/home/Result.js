import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import { useSelector } from 'react-redux';

const Result = ({text, font}) => {

  const theme = useSelector(state => state.theme)

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 15}}>
      <MaterialIcons name="keyboard-arrow-down" size={30} color={theme.mode == 'Light' ? '#000000' : '#FAFAFA'} />
      <View style={[styles.container, {backgroundColor: theme.mode === 'Light' ? '#E0E0ED' : '#1B1B1B'}]}>
        <Text style={[styles.text, {color: theme.mode === 'Light' ? '#000000' : '#FAFAFA', fontSize: font}]}>{text}</Text>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container: {
    width: '95%',
    borderRadius: 10,
  },
  text: {
    margin: 10,
  }
})