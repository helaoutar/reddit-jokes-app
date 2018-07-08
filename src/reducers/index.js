import { combineReducers } from 'redux';

import mode from './mode';
import jokes from './jokes';
import currentCategory from './currentCategory';

import JokeCategories from '../Components/JokeCategories';
import Joke from '../Components/Joke';

import { createStackNavigator } from 'react-navigation';
import { createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

const AppNavigator  = createStackNavigator({
  Home: { screen: JokeCategories },
  Jokes: { screen: Joke }
});

const nav = createNavigationReducer(AppNavigator);

export default combineReducers({
  nav,
  mode,
  jokes,
  currentCategory,
});