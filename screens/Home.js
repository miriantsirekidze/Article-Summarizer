import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, TextInput, ToastAndroid, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import {API_KEY} from '@env'
import { StatusBar } from "expo-status-bar";

import Summarize from '../components/home/Summarize'
import SummarizeAnother from '../components/home/SummarizeAnother'
import Result from '../components/home/Result'

import { useSelector } from 'react-redux';


const Home = () => {

  const navigation = useNavigation();

  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(true)
  const [prompt, setPrompt] = useState('')
  const [plainText, setPlainText] = useState('')
  const [result, setResult] = useState('')

  const theme = useSelector(state => state.theme)
  const font = useSelector(state => state.font)

  const fontSize = font.mode == 'Small' ? 10 : font.mode == 'Normal' ? 16 : font.mode == 'Big' ? 20 : 24 
  const background = theme.mode === 'Light' ? '#FAFAFA' : '#000000'
  const themeConditional = theme.mode === 'Light' ? '#000000' : '#FAFAFA' 


  const fetching = async () => {
    setValue(value)
    if (value.startsWith('h') && value != '') {
      console.log('true')
      try {
        const response = await fetch(value)
        const htmlContent = await response.text()
        const plainTextContent = htmlContent
          .replace(/<style([\s\S]*?)<\/style>/gi, '')
          .replace(/<script([\s\S]*?)<\/script>/gi, '')
          .replace(/<[^>]+>/gi, '')

        setPlainText(plainTextContent)
      } catch (error) {
        console.log(error)
      }
      const conditionalPrompt = "Sam Altman, CEO of OpenAI, testified before Congress suggesting that AI developers should obtain licenses from the U.S. government to release their models. Altman proposed the creation of a regulatory agency that can issue and revoke licenses to hold companies accountable. However, critics argue that this move could hinder competition, benefitting larger companies while harming smaller ones and open-source alternatives. Enforcing an 'AI license' globally may also pose challenges due to the distributed nature of AI development. Altman's proposal aligns with the Biden administration's AI Bill of Rights, which outlines regulations to protect individuals from biased algorithms and provide control over their data. Altman's three-point plan includes forming a government agency to license AI models, establishing safety standards, and conducting independent audits. However, questions regarding copyright regulations and dataset transparency remain unanswered."
      //const conditionalPrompt = 'in following text first determine where the article begins and ends, remove everything other than what you deem not relevant to article and give me only short to medium size of summary of the article' + plainText
      setResult(conditionalPrompt)
    } else {
      console.log('false')
      const conditionalPrompt = 'in following text first determine where the article begins and ends, remove everything other than what you deem not relevant to article and divide summary into multiple sentences with symbol \'•\' next to each of them: ' + value
      setResult(conditionalPrompt)
    }
  
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 100,
          temperature: 0.7,
        }),
      });
  
      const data = await response.json();
      console.log(data)
      //setResult(data.choices[0].text);
    } catch (error) {
      console.log(error)
    }
    
    setVisible(!visible)
  }

  const reset = () => {
    setValue('')
    setResult('')
    setVisible(!visible)
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: background}]}>
      <StatusBar style={theme.mode == 'Light' ? 'dark' : 'light'}/>
      <ScrollView style={{marginTop: '5%'}}>
        <View style={{alignItems: 'flex-end', marginHorizontal: 25}}>
          <Pressable onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="settings-outline" size={24} color={themeConditional} />
          </Pressable>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            value={value}
            onChangeText={text => setValue(text)}
            style={styles.textInput}
            placeholder='Type an URL or text here'
            multiline={true}
            editable={visible}
          />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
          {
            visible === true ? <Summarize onPress={() => fetching()} theme={themeConditional}/> : <SummarizeAnother onPress={() => reset()} theme={themeConditional}/>
          }
        </View>
        <View>
          {
            result != '' && <Result text={result} font={fontSize}/> 
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    margin: 15,
    flexWrap: 'nowrap',
    fontSize: 15,
    letterSpacing: 0.5
  },
  textInputContainer: {
    width: '95%',
    minHeight: 50,
    maxHeight: 300,
    backgroundColor: '#EEEEEE',
    marginTop: '10%',
    alignSelf: 'center',
    borderRadius: 10,
  }
})