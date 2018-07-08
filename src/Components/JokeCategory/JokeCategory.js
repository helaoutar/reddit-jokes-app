import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const JokeType = ({
  category,
  onPressHandler,
  showPrevious,
  showNext,
  previousHandler,
  nextHandler,
  }) => (
    <TouchableHighlight 
      onPress={onPressHandler}
      style={mainStyle.container}>
      <Text style={categoryStyle.container}>{category}</Text>
    </TouchableHighlight>
);

const mainStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 62,
    marginBottom: 6,
    borderRadius: 5,
    flexDirection: 'row'
  },
});

const categoryStyle = StyleSheet.create({
  container: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'black',
    alignSelf: 'center',
    paddingLeft: 15
  }
});

export default JokeType;