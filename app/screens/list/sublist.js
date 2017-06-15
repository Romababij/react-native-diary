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
import SubjectCurrent from './singlesubject'

var listsofsubjects = [
  {'title':'Mathematics', 'teacher': 'Tom Ticker', 'mGrade': 'A', 'upDate':'May 30',
   'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]
  },
  {'title':'Art', 'teacher': 'Tom Ticker', 'mGrade': 'D', 'upDate':'May 27',
   'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]  
  },
  {'title':'Algebra', 'teacher': 'Tom Ticker', 'mGrade': 'B', 'upDate':'May 24',
    'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]   
  },
  {'title':'Reading', 'teacher': 'Tom Ticker', 'mGrade': 'A', 'upDate':'May 30',
    'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]  
  },
  {'title':'Geometry', 'teacher': 'Tom Ticker', 'mGrade': 'F', 'upDate':'May 22',
    'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]   
  },
  {'title':'Health', 'teacher': 'Tom Ticker', 'mGrade': 'A', 'upDate':'May 13',
    'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]   
  },
  {'title':'Geography', 'teacher': 'Tom Ticker', 'mGrade': 'C', 'upDate':'May 6',
    'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]   
  },
  {'title':'Art', 'teacher': 'Tom Ticker', 'mGrade': 'B', 'upDate':'May 18',
    'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]  
  },
  {'title':'Sports', 'teacher': 'Tom Ticker', 'mGrade': 'D', 'upDate':'May 11',
    'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]  
  },
  {'title':'World Literature', 'teacher': 'Tom Ticker', 'mGrade': 'A', 'upDate':'May 29',
    'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]  
  },
  {'title':'Drama', 'teacher': 'Tom Ticker', 'mGrade': 'E', 'upDate':'May 2',
    'listofGrades': [
      {'grade':'A - 90', 'date': '31.05'},
      {'grade':'B - 87', 'date': '30.05'},
      {'grade':'A - 95', 'date': '22.05'},
      {'grade':'C - 72', 'date': '15.05'},
      {'grade':'A - 92', 'date': '31.05'},
      {'grade':'D - 65', 'date': '30.05'},
      {'grade':'B - 88', 'date': '22.05'},
      {'grade':'A - 94', 'date': '15.05'}
    ]  
  }
]

export default class SubjectList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(listsofsubjects)
    };
  }

  renderIcon(grade){
    if (grade == 'A') {
      return '#16a765' 
    } else if (grade == 'B'){
      return '#4986e7'
    } else if (grade == 'C'){
      return '#9c27b0'
    } else if (grade == 'D'){
      return '#f4b400'
    } else if (grade == 'E'){
      return '#fb4c2f'
    } else if (grade == 'F'){
      return '#ff2400'
    }
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
                  <TouchableOpacity  onPress={() => navigate('SubjectCurrent', {data: rowData})}>
                    <View style={styles.subject}>
                      <View style={[styles.midleGrade, {backgroundColor: this.renderIcon(rowData.mGrade)}]}>
                        <Text style={styles.gradeText}>{rowData.mGrade}</Text>
                      </View>

                      <View style={styles.mainInfo}>
                        <Text style={styles.subtitle}>{rowData.title}</Text>
                        <Text style={styles.subteacher}>Teacher - {rowData.teacher}</Text>
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
        <View style={styles.notificationBlock}>
          <TouchableOpacity  onPress={() => navigate('NoteScreen')}>
            <Text style={styles.notificationText}>Notifications</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }  
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    color: '#fff'
  },

  // Notifications
  notificationBlock: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffe219',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16
  }
});
