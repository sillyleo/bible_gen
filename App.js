import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import Chapter from './src/Chapter';
import ChapterList from './src/ChapterList';




export default class App extends Component {
  scrollEnd = () => {
    console.log('ended')
    // console.log(event.nativeEvent.contentOffset.y);
  };
  render() {
    return (
      <SafeAreaView>
      <ScrollView onMomentumScrollEnd={this.scrollEnd}>
        <ChapterList />
      </ScrollView>
      </SafeAreaView>
    );
  }
}