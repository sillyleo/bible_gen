/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import data from './src/genesis.json';

export default class App extends Component {
  state = {
    data: [],
  };
  

  
  
  
  render() {
    console.log(data[0].book[1].chapter);
    const verse = data[0].book[1].chapter;
    console.log(verse[1].verse);

    return (
      <View style={styles.container}>
        <Text>{verse[1].verse}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
