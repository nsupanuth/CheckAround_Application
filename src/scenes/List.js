import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import Thumb from '../components/Thumb';

export default class List extends Component {

  static navigationOptions = {
    tabBarLabel: 'Friends',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../images/world.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount(){
    var self = this;
    // fetch('http://192.168.1.34:8080/getUser')
    // fetch('http://172.20.10.3:8080/getUser')
    fetch('http://192.168.1.40:8080/getuser')
    .then((response) => response.json())
    .then((responseJson) => self.setState({data: responseJson}));
  }

  render() {
    console.log(this.state.data)
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.Theader}>CheckAround Application</Text>
        </View>

          <ScrollView>
            {this.state.data.map(createThumbRow)}
          </ScrollView>

      </View>
    );
  }
}

var createThumbRow = (user, i) => <Thumb key={i} source={user} />;

var styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  header: {
    backgroundColor: '#1abc9c',
    height: 60,
  },
  Theader: {
    textAlign: 'center',
    padding: 30,
    fontWeight: 'bold',
  },

});
