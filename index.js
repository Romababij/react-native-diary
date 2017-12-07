'use strict'

import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, View } from 'react-native'
import { StackNavigator } from 'react-navigation';

import LoginPage from './app/screens/login/';

import HomeScreen from './app/screens/list/';
import SubjectCurrent from './app/screens/list/singlesubject';

import NoteScreen from './app/screens/notifications/';
import NotificationtCurrent from './app/screens/notifications/singlenote';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class FariaDiaryApp extends Component {
  render() {
    return (
      <LoginPage navigation={ navigation } />
    );
  }
}

const FariaDiary = StackNavigator({
	Login: { screen: LoginPage },
	HomeScreen: { screen: HomeScreen },
	SubjectCurrent: { screen: SubjectCurrent },
	NoteScreen: { screen: NoteScreen },
	NotificationtCurrent: { screen: NotificationtCurrent }
});

LoginPage.navigationOptions = {
  header: null
};

HomeScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#09406b'
  },
  headerTitleStyle: {
    color: '#fff'
  },
  headerLeft: null,
  title: "List of subjects"
};

SubjectCurrent.navigationOptions = {
  headerBackTitle: '',
  headerStyle: {
    backgroundColor: '#09406b'
  },
  headerTintColor: 'white'
};

NoteScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#09406b'
  },
  headerTitleStyle: {
    color: '#fff'
  },
  title: "Notifications",
  headerTintColor: 'white'
};

NotificationtCurrent.navigationOptions = {
  headerStyle: {
    backgroundColor: '#09406b'
  },
  headerTintColor: 'white'
};



AppRegistry.registerComponent('FariaDiary', () => FariaDiary);
