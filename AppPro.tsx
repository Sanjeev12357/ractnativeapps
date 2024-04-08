import React from "react";


import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native'




function AppPro():JSX.Element{
    const isDarkMode =useColorScheme() === 'dark';


    return (
        <View style ={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText }>Hello World!</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
       alignItems:'center',
       display:'flex',
       flex:1,
        justifyContent:'center'
    },
    whiteText:{
        color:'pink'
    },
    darkText:{
        color:'black'
    }
})

export default AppPro;