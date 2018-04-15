import React, {Component} from 'react';
import {View, Text, FlatList, SectionList} from 'react-native';
import data from './gen1.json';
import list from './list.json';
import {simplify} from 'simplifr';
import flatten from 'flat';

const chapters = Object.values(data[0].book)

class ChapterList extends Component {

  render() {
    console.log(chapters);
  
    return (
      <View>
        {chapters.map(unit =>
          <Text
            key={unit.chapter_nr}>
            {unit.chapter_nr}
            <ChapterSection
              // title={unit.chapter.chapter_nr}
              data={unit.chapter}
            />
          </Text>
        )}
      </View>
    );
  }
}

const ChapterText = (props) => {
  const propsArray = Object.values(props.data)
  // console.log(props)
  return (
    <Text>
    {propsArray.map(unit => <Text key={unit.verse_nr}>{unit.verse_nr}{unit.verse}</Text>)}
    </Text>
  );
};
const ChapterSection = (props) => {
  const propsArray = Object.values(props.data)
  // console.log(propsArray)
  const flattenProps = flatten(props)
  console.log(flattenProps)
  return (
    // <View>
    // {propsArray.map(unit => 
    //   <FlatList
    //     data={unit.verse}
    //     key={unit.verse_nr}
    //   />
    // )}
    // </View>
    <View>
      {/* <Text>{flattenProps.title}</Text> */}
      <FlatList
        data={propsArray}
        renderItem={({item}) => <Text>{item.verse}</Text>}
      />
    </View>
   
    // <Text>
    // {propsArray.map(unit => <Text key={unit.verse_nr}>{unit.verse}</Text>)}
    // </Text>
  );
};


export default ChapterList;