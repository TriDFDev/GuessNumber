import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers/__index'
import { guess, guessNumber } from '../types/guessTypes'

const MiniScreen = () => {
    const guessNumber =  useSelector(
      (state: RootState) => state.guess
    )

  return (
    <View style={styles.container}>
      
     <Text style={styles.text}>{guessNumber.guessNumber.map((item: guessNumber) => item.guess)}</Text>
    </View>
  )
}

export default MiniScreen

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent:'center'
        ,alignItems:'center',
        marginVertical: 20,
        backgroundColor:'#FF32AD',
        width: "100%",
        height: 50,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: "500",
    }
})