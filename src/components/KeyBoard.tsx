import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Key from './Key'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from "redux"
import { ClearGuessNumber, addGuessNumber } from '../store/actions/guessActionCreate'
import { RootState } from '../store/reducers/__index'
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
     const guessNumber =  useSelector(
      (state: RootState) => state.guess
    )
    const dispatch = useDispatch()
  return (
    <View style={styles.container}> 
      <View style={styles.left}>
        {KeyValues.map(({lable, value}: any) =><View key={value} style={{width:"30%", height: "30%"}}>
            <Key lable={lable} onPress={() => dispatch(addGuessNumber(value))}/>
        </View>)
        }

      </View>
      <View style={styles.right}>
            <View style={{width:"100%", height: "30%", flexGrow:1}}>
            <Key style={{
                    backgroundColor:'#FB5555',
            }} lable='Clear' onPress={() => dispatch(ClearGuessNumber(guessNumber))}/>
        </View>
        <View style={{width:"100%", height: "60%",flexGrow:3}}>
            <Key lable='Enter'/>
        </View>
      </View>
    </View>
  )
}

export default KeyBoard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:"100%",
        flex:1,
        gap: 10,
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
        
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
        // width: '100%']
        height: "100%",
        flexGrow: 3,
        gap: 10,
        display:'flex',
        flexDirection:"column",
        
    }
})