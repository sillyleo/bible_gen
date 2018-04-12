import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import Chapter from './src/Chapter';
import ChapterList from './src/ChapterList';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <ChapterList />
      </ScrollView>
      </SafeAreaView>
    );
  }
}