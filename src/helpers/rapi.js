import blondeJokes from '../assets/jokes/blonde.json';
import barJokes from '../assets/jokes/bar.json';
import nsfwJokes from '../assets/jokes/nsfw.json';
import religion from '../assets/jokes/religion.json';
import dadJokes from '../assets/jokes/dads.json';
import politicsJokes from '../assets/jokes/politics.json';

import { AsyncStorage } from 'react-native';
import * as categories from '../constants';

const getPromise = data => new Promise(res => res(data))

export const getBlondeJokes = () => getPromise(blondeJokes);

export const getBarJokes = () => getPromise(barJokes);

export const getNsfwJokes = () => getPromise(nsfwJokes);

export const getReligionJokes = () => getPromise(religion);

export const getPoliticsJokes = () => getPromise(politicsJokes);

export const getDadJokes = () => getPromise(dadJokes);

export const getFavoriteJokes = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const jokes = [];

  for(key in keys) {
    const [ category, index] = keys[key].split(':');
    const isFavorited = await AsyncStorage.getItem(keys[key]);

    if(category && index && isFavorited == 'true') {
      switch(category) {
        case categories.BAR_JOKES:
          jokes.push(barJokes[index]);
          break;
        case categories.DAD_JOKES:
          jokes.push(dadJokes[index]);
          break;
        case categories.BLONDE_JOKES:
          jokes.push(blondeJokes[index]);
          break;
        case categories.KNOCK_KNOCK_JOKES:
          jokes.push(knockKnockJokes[index]);
          break;
        case categories.NSFW:
          jokes.push(nsfwJokes[index]);
          break;
        case categories.RELIGION_JOKES:
          jokes.push(religion[index]);
          break;
      }
    }
  }

  if(!jokes.length) {
    jokes.push({});
  }
  return jokes;
}