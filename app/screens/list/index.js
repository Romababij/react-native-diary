import React from 'react';
import { StyleSheet, View } from 'react-native';
import SubjectList from './sublist';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <SubjectList navigation={navigation} />
  </View>
);

export default HomeScreen;
