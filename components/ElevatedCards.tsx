import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevator]}>
            <Text style={styles.smallH}> Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text  style={styles.smallH}> Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text  style={styles.smallH}> Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text  style={styles.smallH}> Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text  style={styles.smallH}> Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text  style={styles.smallH}> Tap</Text>
        </View>
      </ScrollView>
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
    card:{
        width: 200,
        height: 100,
        borderRadius:8,
        margin:8,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        color:'black',
    },
    smallH:{
        color:'black',
    },
    cardElevator:{
        backgroundColor:'gray',
        elevation:4,
        shadowOffset:{width:2,height:2},
        shadowColor:'#333'
    },
    container:{
        padding:8,
        display:'flex',
        flexDirection:'row',
        
    }
})