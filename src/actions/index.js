import { NavigationActions } from 'react-navigation';
import { 
  getBlondeJokes,
  getNsfwJokes,
  getBarJokes,
  getDadJokes,
  getReligionJokes,
  getKnockKnockJokes,
  getFavoriteJokes
} from '../helpers/rapi';

import {
  NSFW,
  DAD_JOKES,
  BLONDE_JOKES,
  KNOCK_KNOCK_JOKES,
  BAR_JOKES,
  RELIGION_JOKES,
  FAVORITE_JOKES
} from '../constants';

export const CHANGE_MODE = 'CHANGE_MODE';

export const DISPLAY_JOKES = 'DISPLAY_JOKES';

export const GET_NEXT_JOKE = 'GET_NEXT_JOKE';

export const GET_PREVIOUS_JOKE = 'GET_PREVIOUS_JOKE';

export const CURRENT_CATEGORY = 'CURRENT_CATEGORY';

const changeMode = mode => ({
  type: CHANGE_MODE,
  mode
});

const displayJokes = jokes => ({
  type: DISPLAY_JOKES,
  jokes
});

export const getNextJoke = () => ({
  type: GET_NEXT_JOKE,
});

export const getPreviousJoke = () => ({
  type: GET_PREVIOUS_JOKE,
});

export const currentCategory = category => ({
  type: CURRENT_CATEGORY,
  category,
});



export const getJokes = (category) => dispatch => {
  const showJokes = data => {
    dispatch(displayJokes(data));
    dispatch(changeMode('jokes'));
    dispatch(NavigationActions.navigate({routeName: 'Jokes'}));
  }

  let promise;
  dispatch(currentCategory(category));
  switch(category) {
    case BLONDE_JOKES:
      promise = getBlondeJokes();
      break;
    case NSFW:
      promise = getNsfwJokes();
      break;
    case DAD_JOKES:
      promise = getDadJokes();
      break;
    case BAR_JOKES:
      promise = getBarJokes();
      break;
    case RELIGION_JOKES:
      promise = getReligionJokes();
      break;
    case KNOCK_KNOCK_JOKES:
      promise = getKnockKnockJokes();
      break;
    case FAVORITE_JOKES:
      promise = getFavoriteJokes();
      break;
  }
  promise.then(showJokes);
}

export const goBack = () => dispatch => {
  dispatch(changeMode('categories'));
  dispatch(NavigationActions.navigate({routeName: 'Home'}));
}