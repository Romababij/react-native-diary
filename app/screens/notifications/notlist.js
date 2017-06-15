'use strict'

import React, { Component, Actions } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  ListView,
  StatusBar,
  Navigator,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationtCurrent from './singlenote'

var listsofsubjects = [
  {'title':'Notification 1', 'author': 'Ivan Ivanov', 'message': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'upDate':'May 10'},
  {'title':'Notification 2', 'author': 'Ivan Ivanov', 'message': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'upDate':'May 22'},
  {'title':'Notification 3', 'author': 'Ivan Ivanov', 'message': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'upDate':'May 30'},
]

export default class NotificationtList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(listsofsubjects)
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}> 
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.scrollContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow = {
               (rowData) => (
                  <TouchableOpacity  onPress={() => navigate('NotificationtCurrent', {data: rowData})}>
                    <View style={styles.subject}>
                      <View style={styles.mainInfo}>
                        <Text style={styles.subtitle}>{rowData.title}</Text>
                        <Text style={styles.subteacher}>Author - {rowData.author}</Text>
                      </View>

                      <View style={styles.updatedDate}>
                        <Text style={styles.updatedDateText}>{rowData.upDate}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
               )
            }
          />
        </ScrollView>
      </View>
    );
  }  
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  subject: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#293040'  
  },

  // Icon
  midleGrade: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20
  },
  gradeText: {
    color: '#fff',
    textAlign: 'left',
    fontFamily: 'Futura', 
  }, 

  // Text
  mainInfo: {
    flex: 3,
    marginLeft: 10
  },
  subtitle: {
    color: '#293040',
    fontSize: 20,
    fontFamily: 'Futura' 
  },
  subteacher: {
    color: '#293040',
    textAlign: 'left'
  },
  
  // Icon Right 
  updatedDate: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  updatedDateText: {
    color: '#293040'
  }
});
