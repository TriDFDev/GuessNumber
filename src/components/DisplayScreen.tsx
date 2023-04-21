import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers/__index'
import { Guess } from '../types/guessTypes'

const DisplayScreen = () => {
  const Guessed = useSelector((state: RootState) => state.turnGuessReducer.guessed)
    
  return (
    <View style={[styles.container,styles.shadow]}>
      <View style={styles.table}>

        <View style={[styles.TableHeader, styles.TableBase]}>
        <View style={[styles.column, styles.column1]}>
          <Text  style={[styles.TextBase, styles.Text1]}>Your Guess</Text>
          </View>
        <View style={[styles.column, styles.column2]}>
          <Text style={[styles.TextBase,]}>Correct numbers</Text>
          </View>
        <View style={[styles.column, styles.column2]}>
          <Text style={[styles.TextBase,]}>Correct positions</Text>
          </View>
        </View>

      
       {Guessed.map((item: Guess, index:any) =>   
        <View key={index} style={[styles.TableBody, styles.TableBase]}>
          <View style={[styles.columnBody, styles.column1]}>
            <Text style={[styles.TextBase,]}>{item.guessNumber}</Text>
            </View>
          <View style={[styles.columnBody, styles.column2]}>
            <Text style={[styles.TextBase,]}>{item.correctNumber}</Text>
            </View>
          <View style={[styles.columnBody, styles.column2]}>
            <Text style={[styles.TextBase,]}>{item.correctPosition}</Text>
            </View>
        </View>) }

      </View>
    </View>
  )
}

export default DisplayScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "55%",
        backgroundColor:'#F8FF1D',
        borderRadius: 20,
        marginTop:10,
        
    },
    shadow: {
        borderWidth: 2,
        borderRightWidth: 5,
        borderBottomWidth: 5,
    },
    table:{
      width: "100%",
      paddingHorizontal: 20,
      paddingVertical: 10,  
      height: "100%",
    },
    TableBase:{
width: "100%",
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
    },
    TableHeader:{
      width: "100%",
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomWidth: 2,
      borderBottomColor:'#1e1e1e',
    },
    TableBody:{
      marginTop: 10,
    },
    column:{
            height: 40
    },
    columnBody:{
            height: 20,
    },
    column1:{
      width: '50%',

    }
    ,
    column2:{
      width: '25%',
      
    },
    TextBase:{
      color:'#1e1e1e',
      fontWeight:'500',
      textAlign:'center'
    },
    Text1: {
      fontSize: 22,
    }

})