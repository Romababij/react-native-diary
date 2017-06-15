import React from 'react';
import { StyleSheet, View } from 'react-native';
import NotificationtList from './notlist';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const NoteScreen = ({ navigation }) => (
  <View style={styles.container}>
    <NotificationtList navigation={navigation} />
  </View>
);

export default NoteScreen;
