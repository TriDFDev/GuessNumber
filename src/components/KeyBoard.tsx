import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Key from './Key'
import {  addGuessNumber } from '../store/actions/guessActionCreate'
import { RootState } from '../store/reducers/__index'
import MiniScreen from './MiniScreen'
import {resetGame } from '../store/actions/turnGuessActionCreater'

const KeyValues = [
    {
        lable: "1",
        value: 1,
    },
    {
        lable: "2",
        value: 2,
    },
    {
        lable: "3",
        value: 3,
    },
    {
        lable: "4",
        value: 4,
    },
    {
        lable: "5",
        value: 5,
    },
    {
        lable: "6",
        value: 6,
    },
    {
        lable: "7",
        value: 7,
    },

    {
        lable: "8",
        value: 8,
    },
    {
        lable: "9",
        value: 9,
    },
    
]    

const KeyBoard = () => {

    const [number, setNumber] = useState<string>('');  
    const handleKey = (key: string) => {
        var theNumber = number + key
        if(number.indexOf(key)===-1){
            if(theNumber.length===5){
                return theNumber
            }
            return setNumber(theNumber)
        }
    }

    const clearKey = () => {
        const theNumber = number.slice(0,-1)
        return setNumber(theNumber)
    }

     const guessNumber =  useSelector(
      (state: RootState) => state.guess
    )
    const dispatch = useDispatch()

   const handleSend = () => {
    if(number.length===4){
        dispatch(addGuessNumber(Number(number)))
        setNumber('')
    }
   }
    
   const handleStarGame = () => {
    dispatch(resetGame())
   }

  return (
    <View style={{width: "100%", height: '100%', flex: 1, }}>
        <MiniScreen guessNumber={number}/>
    <View style={styles.container}> 
      <View style={styles.left}>
        {KeyValues.map(({lable, value}: any) =><View key={value} style={{width:60, height: 60}}>
            <Key lable={lable} onPress={() => handleKey(value)}/>
        </View>)
        }
      </View>
      <View style={styles.right}>
            <View style={{width:"100%", height: 55, flexGrow:1}}>
            <Key style={{
                    backgroundColor:'#FB5555',
            }} lable='Clear' onPress={() => clearKey()}/>
        </View>
        <View style={{width:"100%", height: 110,flexGrow:3}}>
            <Key lable='Enter' onPress={() => handleSend()} />
        </View>
      </View>
    </View>
    </View>
   
  )
}

export default KeyBoard

const styles = StyleSheet.create({
    container: {
        width:"100%",
        gap: 10,
        display:'flex',
        flexDirection:'row',
    },
    left:{
        width:'50%',
        height:"100%",
        flexWrap:'wrap',
        flexGrow: 1,
        gap:10,
        display:'flex',
        flexDirection:'row',
    },
    right: {
        height: "100%",
        flexGrow: 3,
        gap: 10,
        display:'flex',
        flexDirection:"column",
    }
})