import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card , styles.cardElevated]}>
            <Image
            source={{
                uri:'https://images.unsplash.com/photo-1517849845537-4d257902454a',
            }}
            style={styles.cardImage}
            
            />

            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Dog</Text>
                <Text style={styles.cardDescription}>Dog of love</Text>
                <Text style={styles.cardFooter}>Ajmer, Rajasthan</Text>
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
    card:{
        margin:8,
        borderRadius:8,
        backgroundColor:'white',
        shadowOffset:{width:4,height:4},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:4,
        display:'flex',
        overflow:'hidden',
        marginBottom:20,
        
    },
    cardElevated:{
        elevation:10,
    },
    cardImage:{
        height:200,
        width:'100%',
    
    },
    cardBody:{
        padding:8  ,
    },
    cardTitle:{color:'black',
        fontSize:24,
        fontWeight:'bold'
    },
    cardDescription:{
        fontSize:16,
        color:'gray'
    },
    cardFooter:{
        fontSize:12,
        display:'flex',
        position:'absolute',
        bottom:0,
        right:8,
        color:'gray'
    }
})