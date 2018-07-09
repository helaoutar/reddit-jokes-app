import React, { Component } from 'react';
import { connect } from 'react-redux';

import JokeCategory from './JokeCategory';
import { getJokes } from '../../actions';

class JokeCategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.categoryPressHandler = this.categoryPressHandler.bind(this);
  }

  categoryPressHandler() {
    const { getJokes, category } = this.props;
    getJokes(category);
  }

  render() {
    const { category, shouldShoulCategory } = this.props;
    alert(shouldShoulCategory);
    return (
      <JokeCategory category={category} onPressHandler={this.categoryPressHandler} />
    );
  }
}

const mapDispatchToProps = {
  getJokes,
};

export default connect(null, mapDispatchToProps)(JokeCategoryContainer);