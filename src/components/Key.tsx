import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { KeyProps } from '../types/InputTypes'

const Key: React.FC<KeyProps> = ({lable,style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,style]}>
      <Text style={styles.text}>{lable}</Text>
    </TouchableOpacity>
  )
}

export default Key

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor:'#ffffff',
        borderRadius: 15,
        borderColor:"#1e1e1e",
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        borderRightWidth: 3,
        borderBottomWidth: 3
    },
    text:{
        color: '#1E1E1E',
        fontSize: 20,
        fontWeight: "600",

    } 
})