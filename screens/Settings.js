import React from 'react'
import { Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Theme from '../components/settings/Theme'
import FontChange from '../components/settings/FontChange'
import ResultType from '../components/settings/ResultType'
import Line from '../components/settings/Line'

const Settings = () => {

  const navigation = useNavigation()

  const theme = useSelector(state => state.theme)
  const fontTheme = theme.mode === 'Light' ? '#000000' : '#FAFAFA'
  const backgroundTheme = theme.mode === 'Light' ? '#FAFAFA' : '#000000'

  return (
    <SafeAreaView style={{backgroundColor: backgroundTheme, flex: 1}}>
      <StatusBar style={theme.mode == 'Light' ? 'dark' : 'light'}/>
      <View style={{marginHorizontal: 15, marginTop: '5%'}}>
        <Pressable onPress={() => {navigation.navigate('Home')}}>
          <AntDesign name="left" size={24} color={fontTheme} />
        </Pressable>
      </View>
      <View style={{marginTop: '10%'}}>
        <Theme fontTheme={fontTheme}/>
        <Line/>
        <FontChange fontTheme={fontTheme}/>
        <Line/>
        <ResultType fontTheme={fontTheme}/>
      </View>
    </SafeAreaView>
  )
}

export default Settings
