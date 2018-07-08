import React from 'react';
import JokeCategory from '../JokeCategory';

import { FlatList, StyleSheet } from 'react-native';

const JokeCategories = ({ categories }) => {
  return <FlatList
    style={containerStyle.container}
    data={categories}
    renderItem={({item}) => <JokeCategory category={item} />}
    keyExtractor={(item, index) => index.toString()}
  />;
}

const containerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#f0efef',
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 6,
  }
});

export default JokeCategories;