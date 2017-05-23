import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

export default class CheckinThumb extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View style={styles.thumb}>
        <View style={styles.info}>
          <Text style={styles.name}>{this.props.source.locationName}</Text>
          <Text>{this.props.source.caption}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  thumb: {
    margin: 5,
    padding: 5,
    backgroundColor: '#cccccc',
    borderRadius: 3,
    minWidth: 96,
    flex: 1,
    flexDirection: 'row'
  },
  img: {
    width: 64,
    height: 64,
  },
  info: {
    paddingLeft: 5
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
