//Redux
import { combineReducers } from 'redux';

//Reducers
import popularReducer from './popularReducer';
import nowPlayingReducer from './nowPlayingReducer';
import topRatedReducer from './topRatedReducer';

export default combineReducers({
  popularMovies: popularReducer,
  nowPlaying: nowPlayingReducer,
  topMovies: topRatedReducer,
});
