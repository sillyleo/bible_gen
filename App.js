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

    const chapter = data[0]
    // console.log(chapter.book_name);
    const chapterArray = Object.keys(chapter).map(key => chapter[key])
    console.log(chapterArray);
    
    const verse = data[0].book[1].chapter;
    const verseArray = Object.keys(verse).map(key => verse[key])

    return (


      <SafeAreaView>
      <ScrollView>
        <Text> {chapterArray[2]}  {chapterArray[3]} </Text>
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
