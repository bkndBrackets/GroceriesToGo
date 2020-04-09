import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

const LoginButton = () => {

    return(
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginBtn:{
        width:"80%",
        backgroundColor:"#249924",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        marginBottom:10
      },
      loginText:{
        color:"white"
      }
})

export default LoginButton;