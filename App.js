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
  ScrollView
} from 'react-native';
import data from './src/genesis.json';

export default class App extends Component {
  state = {
    data: [],
  };
  
  render() {

    const verse = data[0].book[1].chapter;
    const verseArray = Object.keys(verse).map(key => verse[key])

    // console.log(verse[1].verse);

    return (


      <SafeAreaView>
      <ScrollView>

        <FlatList
          data={verseArray}
          keyExtractor={() => Math.random().toString(36).substr(2, 9)}
          renderItem={({item}) => {
            const { verse, verse_nr } = item
          return <Text>{verse_nr}{verse}</Text>}}
        />

      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
});
