import React, {Component} from 'react';
import {View, Text} from 'react-native';
import data from './genesis.json';
import list from './list.json';

const chapters = Object.values(data[0].book)

class ChapterList extends Component {
  render() {
    return (
      <View>
        {chapters.map(unit => <Chapter
          chapter_nr={unit.chapter_nr}
          chapter={unit.chapter}
          key={() => Math.random().toString(6).substr(2, 3)}/>)}
        <Chapter/>
      </View>
    );
  }
}

const Chapter = (props) => {
  const propsArray = Object.values(props)

  // console.log(props);
  return (
    <View>

      <Text>{props.chapter_nr}</Text>
      {chapters.map(unit => <Verses
        chapter_nr={unit.chapter_nr}
        chapter={unit.chapter}/>)}

    </View>
  );
};

const Verses = (props) => {

  const propsArray = Object.values(props.chapter)
  // console.log(propsArray);
  return (
    <Text>
      {propsArray.map(unit => <Verse
        verse_nr={unit.verse_nr}
        verse={unit.verse}/>)}
    </Text>
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