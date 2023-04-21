import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DisplayScreen from '../components/DisplayScreen'
import MiniScreen from '../components/MiniScreen'
import KeyBoard from '../components/KeyBoard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/reducers/__index'
import { resetGame, startGame } from '../store/actions/turnGuessActionCreater'
import Modal from "react-native-modal";
import Key from '../components/Key'

const Home = () => {  
    const [togleModal, setTogleModal] = useState<boolean>(false)
    const TurnGuess = useSelector((state: RootState) =>state.turnGuessReducer)
    const dispatch = useDispatch()

    useEffect(() => {   
        dispatch(startGame())
    },[dispatch])

    useEffect(() => {
        if(TurnGuess.status!== 'Playing'){
            setTogleModal(!togleModal)
        }
    },[TurnGuess])

    const handlePlayAgainBtn = () => {
        dispatch(resetGame())
        dispatch(startGame())
        setTogleModal(!togleModal)
    }
  return (
    <View style={styles.container}>
        <Modal backdropColor='#50FFAF' backdropOpacity={1} isVisible={togleModal}>
            <View style={styles.modalStyle}>
                <Text style={styles.titleNoti}>You {TurnGuess.status}!</Text>
                <Text style={styles.number}>Number to guess: {TurnGuess.numberToGuess}</Text>
            <View style={{width: '60%', height: 70}}>
            <Key onPress={() => handlePlayAgainBtn()} lable='Play again' style={styles.btn}/>
          </View>
        </View>
      </Modal>
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
    },
    modalStyle: {
        width: '100%',
        height: '100%', 
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    titleNoti: {
        textAlign:'center',
        fontSize: 60,
        fontWeight: '700',
        color: '#1e1e1e'
    },
    number:{
        marginBottom:15,
        textAlign:'center',
        fontSize: 20,
        fontWeight: '500',
        color: '#1e1e1e'
    },
    btn: {
        fontSize: 50,
        backgroundColor:'#F8FF1D'
    }
})