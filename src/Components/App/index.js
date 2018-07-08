import React from 'react';
import { connect } from 'react-redux';

import { BackHandler, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import JokeCategories from '../JokeCategories';
import Joke from '../Joke';

import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { goBack } from '../../actions';


const AppNavigator  = createStackNavigator({
  Home: { screen: JokeCategories },
  Jokes: { screen: Joke }
}, {
  headerMode: 'none'
});

const App = reduxifyNavigator(AppNavigator, 'root');


class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, state: nav } = this.props;
    if (nav.index === 0) {
      return false;
    }

    dispatch(goBack());
    return true;
  };

  render() {
    /* more setup code here! this is not a runnable snippet */ 
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  state: state.nav,
});

const mapDispatchToProps = {
  goBack
};

export default connect(mapStateToProps)(ReduxNavigation);