import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import CredsInput from './components/CredsInput';
import LoginButton from './components/LoginButton';
import SignupButton from './components/SignupButton';
import ForgotButton from './components/ForgotButton';
import ContactUsButton from './components/ContactUsButton';

export default class App extends React.Component {

  render(){
    return (
      <ImageBackground source={require('./assets/bg.png')}
                        style={styles.container}>
          <Text style={styles.logo}>GROCERIES TO GO</Text>
          <LoginButton />
          <SignupButton />
          <ForgotButton />
          <ContactUsButton />
        

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontFamily: 'sans-serif-light',
    fontSize:40,
    color:"#fff",
    marginTop:200,
    marginBottom:0
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
});
