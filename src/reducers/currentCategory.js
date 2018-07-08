import { CURRENT_CATEGORY } from '../actions';

export default (state = '', { type, category }) => {
  switch(type) {
    case CURRENT_CATEGORY:
      return category;
    default:
      return state;
  }
}