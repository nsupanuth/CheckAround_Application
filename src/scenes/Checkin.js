import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import CheckinThumb from '../components/CheckinThumb';

export default class Checkin extends Component {

  static navigationOptions = {
    tabBarLabel: 'Checkin',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../images/checkin.png')}
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

    fetch('http://192.168.1.40:8080/showlocations')
    .then((response) => response.json())
    .then((responseJson) => self.setState({data: responseJson}));
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.state.data.map(createThumbRow)}
        </ScrollView>
      </View>
    );
  }
}

var createThumbRow = (checkin, i) => <CheckinThumb key={i} source={checkin} />;

var styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  }
});
