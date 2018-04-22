import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import Chapter from './src/Chapter';
import ChapterList from './src/ChapterList';




export default class App extends Component {
  scrollEnd = (event) => {
    // console.log('ended')
    // console.log(this.refs.myScrollView.scrollProperties.offset);
    // console.log(event.nativeEvent.contentOffset.y);
    const scrollPosision = event.nativeEvent.contentOffset.y
    this.setState({scrollPosision: scrollPosision})
    console.log(this.state)
  };

  state = {
    scrollPosision: 0
  }

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