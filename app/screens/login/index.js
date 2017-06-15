'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const appLogo = require("../../images/logo.png");

export default class LoginPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>   
        <StatusBar barStyle="light-content" backgroundColor="#293041" />
        <View style={styles.logoContainer}>
           <Image source={appLogo} style={styles.logo} />
           <Text style={styles.appTitle}>School Diary</Text>
           <Text style={styles.logoTitle}> An app made for parents to check their children(s) evaluation</Text>
        </View>  
        <View style={styles.loginFormWrap}>        
          <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Icon name="user-o" style={styles.icon} />
              </View>
            <TextInput
              placeholder="Username or Email"
              placeholderTextColor="rgba(0,0,0,0.2)"
              style={styles.input}
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={()=> this.passwordInput.focus()}
              underlineColorAndroid="transparent">
            </TextInput>
          </View>

          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
                <Icon name="key" style={styles.icon} />
              </View>
            <TextInput
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="rgba(0,0,0,0.2)"
              style={styles.input}
              returnKeyType="go"
              ref={(input)=> this.passwordInput = input}
              underlineColorAndroid="transparent">
            </TextInput>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('HomeScreen')}>
            <View>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09406b',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 144,
    height: 60
  },
  appTitle: {
    fontSize: 30,
    width: 250,
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
    fontFamily: 'Copperplate' 
  },
  logoTitle: {
    width: 250,
    textAlign: 'center',
    color: '#fff',
    opacity: 0.9,
    fontFamily: 'Kohinoor Devanagari'
  },
  loginFormWrap: {
    padding: 20
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'transparent',
    height: 40
  },
  iconWrap: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe219',
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
    backgroundColor: 'rgb(255,255,255)',
    paddingHorizontal: 10
  },
  icon: {
    fontSize: 15
  },
  buttonContainer: {
    backgroundColor: '#ffe219',
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#000',
    fontSize: 18
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#fff' 
  }
});
