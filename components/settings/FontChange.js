import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'

import {changeFont} from '../../redux/actions'
import { useDispatch } from 'react-redux';
import ChangeValueButtons from './ChangeValueButtons';

const FontChange = ({fontTheme}) => {

  const theme = useSelector(state => state.theme)
  const font = useSelector(state => state.font)
  const dispatch = useDispatch()

  const conditionalTheme = theme.mode == 'Light' ? '#000000' : '#FAFAFA';
  const fontSize = font.mode == 'Small' ? 10 : font.mode == 'Normal' ? 16 : font.mode == 'Big' ? 20 : 24
  let fontNumber = font.mode == 'Small' ? 0 : font.mode == 'Normal' ? 1 : font.mode == 'Big' ? 2 : 3

  const [num, setNum] = useState(1)

  const increaseValues = () => {
    if (fontNumber < 3) {
      fontNumber += 1;
      dispatch(changeFont(fontNumber === 0 ? 'Small' : fontNumber === 1 ? 'Normal' : fontNumber === 2 ? 'Big' : 'Biggest'));
    }
  };
  
  const decreaseValues = () => {
    if (fontNumber > 0) {
      fontNumber -= 1;
      dispatch(changeFont(fontNumber === 0 ? 'Small' : fontNumber === 1 ? 'Normal' : fontNumber === 2 ? 'Big' : 'Biggest'));
    }
  };
  

  return (
    <View style={{marginTop: 10, marginHorizontal: 20}}>
      <Text style={{fontSize: 24, fontWeight: '600', color: conditionalTheme }}>Text Size</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
        <Text style={{fontSize: 18, color: fontTheme, fontWeight: '500'}}>{fontSize}px</Text>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          {
            font.mode != 'Biggest' && <ChangeValueButtons theme={conditionalTheme} onPress={increaseValues} name={'arrowup'} />
          }
          <Text style={{fontSize: 22, fontWeight: '600', color: fontTheme }}>{font.mode}</Text>
          {
            font.mode != 'Small' ? <ChangeValueButtons theme={conditionalTheme} onPress={decreaseValues} name={'arrowdown'}/> : <View style={{width: 25, height: 0}}/>
          }
        </View>
      </View>
    </View>
  )
}

export default FontChange