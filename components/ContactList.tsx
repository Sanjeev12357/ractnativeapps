import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function 
() {
    const contacts=[
        {uid:1,name:'John Doe', number:'1234'},
        {uid:2, name:'Jane Doe', number:'5678'},
        {uid:3,name:'John Smith', number:'4321'},
        {uid:4, name:'Jane Smith', number:'8765'},
    
    ]
  return (
    <View>
      <Text
      style={styles.headingText}
      >
        Contact list
      </Text>
      <ScrollView
      
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map((item)=>(
            <View key={item.uid} style={styles.contactCard}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactNumber}>{item.number}</Text>
            </View>
        ))}
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
    container:{
        display:'flex',
        
        margin:8,
      
    },
    contactCard:{
        margin:2,
        padding:8,
        backgroundColor:'white',
        borderRadius:10,
        shadowOffset:{width:4,height:4},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:4,
        display:'flex',
        overflow:'hidden',
        marginBottom:5,
        elevation:10,
    },
    contactName:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    contactNumber:{
        fontSize:16,
        color:'gray'
    }
})