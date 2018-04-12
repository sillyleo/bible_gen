import React, {Component} from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList,
  ScrollView
} from 'react-native';
import data from './genesis.json';

export default class Chapter extends Component {

  render() {

    const chapter = data[0].book
    const chapterArray = Object
      .keys(chapter)
      .map(key => chapter[key])
    const verse = data[0].book[1].chapter;
    const verseArray = Object
      .keys(verse)
      .map(key => verse[key])

    return (

          <FlatList
            data={verseArray}
            keyExtractor={() => Math.random().toString(36).substr(2, 9)}
            renderItem={({item}) => {
            return <Text>{item.verse_nr}{item.verse}</Text>
          }}/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'
  }
});