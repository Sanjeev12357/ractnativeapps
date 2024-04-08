import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Card 1</Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal:8,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    container:{
        display:'flex',
        flexDirection:'row',
        margin:8,
        flexWrap:'wrap',
       


    },
    card:{
        width: 100,
        height: 100,
        borderRadius:4,
        margin:8,
        display:'flex',
       
        justifyContent:'center',
        alignItems:'center'
    },
    cardOne:{
        backgroundColor:'gray'
    },
    cardTwo:{
        backgroundColor:'blue'
    },
    cardThree:{
        backgroundColor:'green'
    }
})