import { CHANGE_MODE } from '../actions';

export default (state = 'categories', { type, mode }) => {
  switch(type) {
    case CHANGE_MODE:
      return mode;
    default:
      return state;
  }
}