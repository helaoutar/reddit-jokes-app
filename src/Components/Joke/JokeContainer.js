import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, AsyncStorage } from 'react-native';

import Joke from './Joke';
import Footer from '../Footer';

class JokeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false
    };
  }

  componentDidMount() {
    const { currentJoke: index, currentCategory: category } = this.props;
    const jokeKey = `${category}:${index}`;
    AsyncStorage.getItem(jokeKey).then(status => {
      this.setState({
        isFavorite: status == 'true' ? true : false
      });
    });
  }

  componentWillReceiveProps({ currentJoke: index, currentCategory: category }) {
    const jokeKey = `${category}:${index}`;
    AsyncStorage.getItem(jokeKey).then(status => {
      this.setState({
        isFavorite: status == 'true' ? true : false
      });
    });
  }

  toggleFavorite = async (category, index) => {
    const jokeKey = `${category}:${index}`;
    const status = await AsyncStorage.getItem(jokeKey);
    const newStatus = status ? status == 'true' ? 'false' : 'true' : 'true';
    await AsyncStorage.setItem(jokeKey, newStatus);
    this.setState({
      isFavorite: newStatus == 'true' ? true : false
    });
  }
  
  render() {
    const { list, currentJoke } = this.props;
    const jokeContainerStyle = StyleSheet.create({
      container: {
        position: 'relative',
        flex: 1
      }
    });

    const jokeStyle = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
      }
    });

    const footerStyle = StyleSheet.create({
      container: {
        backgroundColor: '#1d2945',
        flexDirection: 'column',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });
    return (
      <View style={jokeContainerStyle.container}>
        <Joke style={jokeStyle.container} index={currentJoke} content={list[currentJoke].content} />
        <Footer style={footerStyle.container} isFavorite={this.state.isFavorite} toggleFavoriteHandler={this.toggleFavorite}/>
      </View>
    );
  }
}



const mapStateToProps = ({ jokes: {list, currentJoke}, currentCategory }) => ({
  list,
  currentJoke,
  currentCategory
});

export default connect(mapStateToProps)(JokeContainer);