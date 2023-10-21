import {View, Text, TextInput} from 'react-native'
import React from 'react'

/* Unknown error: objects are not valid as a React Child */

export default function InputField(label,icon,inputType, keyboardType) {
  return(
    <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom: 8, marginBottom:25}}>
        {icon}
        {inputType == 'password' ? 
        (<TextInput placeholder={label} keyboardType={keyboardType} style={{flex: 1, paddingVertical: 0}} secureTextEntry = {true}/>) : 
        (<TextInput placeholder={label} keyboardType = {keyboardType} style={{flex: 1, paddingVertical: 0}}/>)}
      </View>
  );
}