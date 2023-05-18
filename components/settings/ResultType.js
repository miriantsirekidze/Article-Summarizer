import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../../redux/actions';

const ResultType = ({fontTheme}) => {

  const mode = useSelector(state => state.mode)
  const dispatch = useDispatch()

  const changeValues = () => {
    dispatch(changeMode(mode.mode == 'Single Paragraph' ? 'Bulleted Points' : 'Single Paragraph'))
  }

  return (
    <View style={{marginHorizontal: 20, marginTop: 10}}>
      <Text style={{fontSize: 24, fontWeight: '600', color: fontTheme}}>Result Type</Text>
      <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 5}}>
        <Text style={{fontSize: 18, fontWeight: '600', color: fontTheme}}>{mode.mode}</Text>
        <Pressable onPress={() => changeValues()} style={{marginLeft: 5}}>
          <AntDesign name="swap" size={24} color={fontTheme} />
        </Pressable>
      </View>
    </View>
  )
}

export default ResultType