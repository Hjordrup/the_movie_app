import theMoviedb from '../../apis/theMoviedb';

export const getPopularMovies = () => async (dispatch) => {
  const response = await theMoviedb.get(
    'popular?api_key=8b00462fd15033a058b9ae892f063a7b&language=en-US&page=1'
  );
  dispatch({ type: 'GET_POPULAR_MOVIES', payload: response });
};

export const getNowPlaying = () => async (dispatch) => {
  const response = await theMoviedb.get(
    'now_playing?api_key=8b00462fd15033a058b9ae892f063a7b&language=en-US&page=1'
  );
  dispatch({ type: 'GET_NOW_PLAYING', payload: response });
};

export const getTopRated = () => async (dispatch) => {
  const response = await theMoviedb.get(
    'top_rated?api_key=8b00462fd15033a058b9ae892f063a7b&language=en-US&page=1'
  );
  dispatch({ type: 'GET_TOP_RATED', payload: response });
};
