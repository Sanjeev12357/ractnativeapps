import { StyleSheet, Text, View , Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What's new in js 21</Text>
        </View>
        <Image
        source={{uri:'https://picsum.photos/200/300'}}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text style={styles.textColor} numberOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
                lacus sit amet turpis tincidunt aliquam. Sed sit amet lacus sit amet
                turpis tincidunt aliquam.
            </Text>
        </View>
        <View style={styles.footerContainer}>
           <TouchableOpacity
           onPress={()=>{openWebsite('https://www.javascript.com/')}}
           >
                <Text style={styles.textColor}>Read More</Text>
           </TouchableOpacity>
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
        elevation:10,
    },
    elevatedCard:{
        elevation:10,
    },
    headingContainer:{
        padding:8,
        backgroundColor:'blue',
    },
    headerText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    cardImage:{
        height:200,
        width:'100%',
    },
    bodyContainer:{
        padding:8,
        color:'black',
    },
    footerContainer:{
        padding:8,
        display:'flex',
        
        justifyContent:'center',
    },
    textColor:{
        color:'black'
    }
})