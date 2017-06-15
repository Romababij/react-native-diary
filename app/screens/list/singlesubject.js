'use strict'

import React, { Component } from 'react';
import { 
	AppRegistry,
	Text,
	View,
	StyleSheet
} from 'react-native'

import { StackNavigator } from 'react-navigation';

class SubjectCurrent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  data: {}
		};
	}

	render() {
		var dataList = this.props.navigation.state.params.data
		let renderList = dataList.listofGrades.map(function(object,i) {
		    return (
		      <View style={styles.allGrades} key={i}>
		   		<Text style={styles.gradeNumber}>{object.grade}</Text>
		      	<Text style={styles.gradeDate}>{object.date}</Text>
		      </View>	
		    )
		})
		return (
			<View style={styles.container}>
				<Text style={styles.gradeText}>{dataList.title}</Text>
				<Text style={styles.subTeacher}>Teacher: {dataList.teacher}</Text>
				{renderList}
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  gradeText: {
    color: '#293040',
    textAlign: 'center',
    fontFamily: 'Futura', 
    fontSize: 20,
    marginBottom: 10
  }, 
  subTeacher: {
  	textAlign: 'left',
  	color: '#293040',
  	fontSize: 15,
  	marginBottom: 10
  },
  // All grades table
  allGrades: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  	borderWidth: 1,
  	borderColor: '#293040',
  	marginTop: -1,
  	padding: 20
  },
  gradeNumber: {
  	textAlign: 'center',
  	color: '#293040',
  	justifyContent: 'center',
    alignItems: 'center',
  },
  gradeDate: {
  	textAlign: 'center',
  	color: '#293040',
  	justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SubjectCurrent;
