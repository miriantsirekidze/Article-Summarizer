import { View, Text } from "react-native";
import React from "react";
import {Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ChangeValueButtons = ({ theme, onPress, name }) => {
  return (
    <Pressable style={{ marginHorizontal: 5 }} onPress={onPress}>
      <AntDesign name={name} size={25} color={theme}/>
    </Pressable>
  );
};

export default ChangeValueButtons;
