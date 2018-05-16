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
  scroll500 = (event) => {
    // console.log('ended')
    // console.log(this.refs.myScrollView.scrollProperties.offset);
    // console.log(event.nativeEvent.contentOffset.y);
    this.scrollView.scrollTo({ y: 500, animated: true });
  };

  state = {
    scrollPosision: 0
  }

  refScrollView = (scrollView) => {
    this.scrollView = scrollView;
  }


  render() {
    return (
      <SafeAreaView>
      <ScrollView
        ref={this.refScrollView}
        // onMomentumScrollEnd={this.scrollEnd}
        onMomentumScrollEnd={this.scroll500}
      >
        <ChapterList />
      </ScrollView>
      </SafeAreaView>
    );
  }
}