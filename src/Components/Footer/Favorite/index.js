import React from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';
import addToFavoriteIcon from '../../../assets/icons/favorite.png';
import favorited from '../../../assets/icons/favorite-t.png';

export default class Favorite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentCategory, currentJoke, toggleFavoriteHandler, isFavorite } = this.props;

    const addToFavoriteStyle = StyleSheet.create({
      container: {
        height: 55,
        width: 55
      }
    });

    return (
      <TouchableHighlight onPress={() => toggleFavoriteHandler(currentCategory, currentJoke)} underlayColor="rgba(0, 0, 0, 0)">
      { 
        isFavorite ? <Image style={addToFavoriteStyle.container} source={favorited}/>
                   : <Image style={addToFavoriteStyle.container} source={addToFavoriteIcon}/>
      }
      </TouchableHighlight>
    )
  }
}

