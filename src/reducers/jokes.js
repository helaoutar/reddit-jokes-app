import { 
  DISPLAY_JOKES,
  GET_NEXT_JOKE,
  GET_PREVIOUS_JOKE,
} from '../actions';

export default (state = {
  list: [],
  currentJoke: -1,
}, {
  type,
  jokes,
}) => {
  switch(type) {
    case DISPLAY_JOKES:
      return Object.assign({}, state, { list: jokes, currentJoke: 0 });
    case GET_NEXT_JOKE:
      return Object.assign({}, state, { currentJoke: state.currentJoke + 1 });
    case GET_PREVIOUS_JOKE:
      return Object.assign({}, state, { currentJoke: state.currentJoke - 1 });
    default:
      return state;
  }
}