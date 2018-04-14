import React, {Component} from 'react';
import {View, Text} from 'react-native';
import data from './genesis.json';
import list from './list.json';
import {simplify} from 'simplifr';
import flatten from 'flat';

const chapters = Object.values(data[0].book)

class ChapterList extends Component {
  render() {
    return (
      <View>
        {chapters.map(unit => <Chapter
          chapter_nr={unit.chapter_nr}
          chapter={unit.chapter}
          key={unit.chapter_nr}
        />)}
      </View>
    );
  }
}

const Chapter = (props) => {
  const verseArray = Object.values(props.chapter)
  const chapterArray = props.chapter_nr

  // console.log(chapterArray);
  return (
    <View>

      {/* <Text>{props.chapter_nr}</Text> */}

      {verseArray.map(unit =>
        <Text key={unit.verse_nr}>
        {props.chapter_nr}:{unit.verse_nr}{unit.verse}
        </Text>)
      }

    </View>
  );
};

const Verses = (props) => {

  const propsArray = Object.values(props.chapter)
  // console.log(propsArray);
  return (
    <Text>verse</Text>
      // {propsArray.map(unit => <Verse
      //   key={unit.verse_nr}
      //   verse_nr={unit.verse_nr}
      //   verse={unit.verse}/>)}
  );
}

const Verse = (props) => {

  // console.log(props.verse[0]); const propsArray = Object.values(props.chapter)
  return (
    <Text>
      {props.verse}
    </Text>
  );
}

export default ChapterList;