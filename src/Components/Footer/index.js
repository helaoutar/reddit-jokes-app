import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';

import { getPreviousJoke, getNextJoke } from '../../actions';
import previousIcon from '../../assets/icons/previous.png';
import nextIcon from '../../assets/icons/next.png';

import Favorite from './Favorite';
import { FAVORITE_JOKES } from '../../constants';

const Footer = ({
  shouldShowNext,
  shouldShowPrevious,
  getNextJoke,
  getPreviousJoke,
  style,
  isFavorite,
  toggleFavoriteHandler,
  currentJoke,
  currentCategory
}) => (
  <View style={style}>
    {
      shouldShowPrevious ?
      <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" style={previousStyle.container} onPress={getPreviousJoke}>
          <Image source={previousIcon} style={navigationStyle.container} />
      </TouchableHighlight> : null
    }
    { currentCategory != FAVORITE_JOKES ? <Favorite currentCategory={currentCategory} isFavorite={isFavorite} currentJoke={currentJoke} toggleFavoriteHandler={toggleFavoriteHandler}/> : null }
    {
      shouldShowNext ?
      <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" style={nextStyle.container} onPress={getNextJoke}>
          <Image source={nextIcon} style={navigationStyle.container} />
      </TouchableHighlight> : null
    }
  </View>
);

const mapDispatchToProps = {
  getPreviousJoke,
  getNextJoke
};

const mapStateToProps = ({ jokes: {list, currentJoke}, currentCategory }) => ({
  shouldShowNext: currentJoke !== (list.length - 1),
  shouldShowPrevious: !!currentJoke,
  currentJoke,
  currentCategory
});

const previousStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 60,
    alignSelf: 'center'
  }
});

const nextStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    right: 60
  }
});

const navigationStyle = StyleSheet.create({
  container: {
    height: 35,
    width: 35
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);