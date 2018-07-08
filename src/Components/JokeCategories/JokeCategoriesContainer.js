import React from 'react';
import JokeCategories from './JokeCategories';
import * as categories from '../../constants';

const cats = [];

for(i in categories) 
  cats.push(categories[i]);

export default class JokeCategoriesContainer extends React.Component {
  render() {
    return <JokeCategories categories={cats}/>
  }
}