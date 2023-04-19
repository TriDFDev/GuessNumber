import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import DisplayScreen from '../components/DisplayScreen'
import MiniScreen from '../components/MiniScreen'
import KeyBoard from '../components/KeyBoard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/reducers/__index'
import { startGame } from '../store/actions/turnGuessActionCreater'
import { generateRandomNumber } from '../utils/test'

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>Guess Number</Text>
            <DisplayScreen/>
            <KeyBoard/>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({  
    container: {
        backgroundColor:"#50FFAF",
        flex:1,
    },
    title: {
        color: '#1E1E1E',
        fontSize: 25,
        fontWeight: '700',
    },
    box: {
        width: "100%",
        height: "100%",
        padding:20,
    }


})