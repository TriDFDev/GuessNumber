import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DisplayScreen from '../components/DisplayScreen'
import MiniScreen from '../components/MiniScreen'
import KeyBoard from '../components/KeyBoard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/reducers/__index'
import { newGuessNumber } from '../store/actions/turnGuessActionCreater'

const Home = () => {

    // const dispatch = useDispatch()
    // const numberToGuess =useSelector(
    //     (state : RootState) => state.turnGuess
    // )
    // console.log('numberToguess', numberToGuess);
    

    // const  handleStartGame = () =>{
    //     // dispatch(newGuessNumber)
    //     function generateRandomNumber(): string {
    //         let num: string = "";
    //         const digits: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    //         for (let i: number = digits.length - 1; i > 0; i--) {
    //             const j: number = Math.floor(Math.random() * (i + 1));
    //             [digits[i], digits[j]] = [digits[j], digits[i]];
    //         }

    //         for (let i: number = 0; i < 4; i++) {
    //             num += digits[i];
    //         }

    //         return num;
    //         }
            

    // }
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>Guess Number</Text>
            <DisplayScreen/>
            <MiniScreen/>
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