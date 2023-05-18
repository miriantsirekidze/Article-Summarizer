import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useEffect} from 'react'
import Animated, {
  useAnimatedStyle,
  withTiming, 
  withSpring,
  useDerivedValue,
  interpolateColor,
  useSharedValue
} from 'react-native-reanimated'

import { useDispatch, useSelector } from 'react-redux'; 
import {switchMode, changeActive} from '../../redux/actions'


const Theme = ({fontTheme}) => {

  const switchTranslation = useSharedValue(0)
  
  const dispatch = useDispatch()
  const active = useSelector(state => state.active)
  const theme = useSelector(state => state.theme)

  const progress = useDerivedValue(() => {
    return withTiming(active.mode ? 26 : 0)
  })
  
  useEffect(() => {
    if(active.mode) {
      switchTranslation.value = 32
    } else {
      switchTranslation.value = 6
    }
  }, [active, switchTranslation])

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 26],
      ['#E0E0ED', '#2B2B2B']
      
    )
    return {
      backgroundColor
    }
  })

  const backgroundColorStyleSwitch = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 26],
      ['#2B2B2B', '#EEEEEE']
    )
    return {
      backgroundColor
    }
  })

  const switchStyle = useAnimatedStyle(() => {
    return ({
      transform: [{
        translateX: withSpring(switchTranslation.value, {
          mass: 1,
          damping: 15,
          stiffness: 120,
          overshootClamping: false,
          restSpeedThreshold: 0.001,
          restDisplacementThreshol: 0.001
        })
      }]
    })
  })

  const changeTheme = () => {
    dispatch(changeActive(!active.mode))
    dispatch(switchMode(active.mode ? 'Light' : 'Dark'))
  }
  
  
  return (
    <View style={{marginHorizontal: 20}}>
      <Text style={{fontWeight: '600', fontSize: 24, color: fontTheme}}>Theme</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
        <Text style={{fontSize: 18, color: fontTheme, fontWeight: '500'}}>{theme.mode}</Text>
        <Pressable onPress={() => changeTheme()}>
          <Animated.View style={[styles.container, backgroundColorStyle]}>
            <Animated.View style={[styles.switch, switchStyle, backgroundColorStyleSwitch]}/>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  )
}

export default Theme

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 70,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    justifyContent: 'center'
  },
  switch: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#000000',
    elevation: 4
  }
})