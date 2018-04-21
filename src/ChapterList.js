import React, {Component} from 'react';
import {View, Text, FlatList, SectionList} from 'react-native';
// import data from './gen1.json';
import data from './gen-kjv.json';
import list from './list.json';
import {simplify} from 'simplifr';
import flatten from 'flat';


// get data from json and make it array
const chapters = Object.values(data[0].book)



// define chapters, 50 in total 
class ChapterList extends Component {


  render() {
    // console.log(chapters);
    // map chapters' array and pass chapter content to ChapterSection, where { unit.chapter } are objects



    // choose render option
    const option1 = false

    if (option1) {
      return (

        // option 1
        <View>
          {chapters.map(unit =>
            <Text
              key={unit.chapter_nr}>
              
              <View><Text>Chapter {unit.chapter_nr}</Text></View>
              <View>
                <ChapterText
                  data={unit.chapter}
                />
              </View>
            </Text>
          )}
        </View>
  
      );    
    }
    return (

      // options 2

      <View>
        {chapters.map(unit =>
          <ChapterSection
            chapter_nr={unit.chapter_nr}
            data={unit.chapter}
          />
        )}
      </View>

    );
  


  }
}

// option 1: render { unit.chapter } with chapterText, which displays text correctly but with slow startup time.

const ChapterText = (props) => {
  const propsArray = Object.values(props.data)
  // console.log(props)
  return (
    <Text>
    {propsArray.map(unit => <Text key={unit.verse_nr}>{unit.verse_nr}:{unit.verse}</Text>)}
    </Text>
  );
};

// option 2: render { unit.chapter } with flatlist or sectionlist. can't quite figure it out.



const ChapterSection = (props) => {

  const propsArray = Object.values(props.data)
  // console.log(propsArray)
  const flattenProps = flatten(props)
  // console.log(flattenProps)
  console.log(props.chapter_nr)
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
      <Text>{props.chapter_nr}</Text>
      <FlatList
        data={propsArray}
        // horizontal={true}
        ListHeaderComponent={this.renderHeader}
        key={props.verse_nr}
        renderItem={({item}) => <Text>{item.verse_nr}{item.verse}</Text>}
      />
    </View>
   
    // <Text>
    // {propsArray.map(unit => <Text key={unit.verse_nr}>{unit.verse}</Text>)}
    // </Text>
  );
};


export default ChapterList;