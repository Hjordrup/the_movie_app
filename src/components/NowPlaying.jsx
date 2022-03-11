import { NavigationBar } from './NavigationBar';

import { connect } from 'react-redux';
import { getNowPlaying } from '../state/actionCreators';
import { useEffect } from 'react';
import MovieCard from './MovieCard';

import './style.css';

const NowPlaying = (props) => {
  useEffect(() => {
    props.getNowPlaying();
  }, []);

  function getMovies(movieArray) {
    let movieComponents = [];
    movieArray.map((movie) => {
      movieComponents.push(
        <MovieCard
          title={movie.original_title}
          img={movie.poster_path}
          text={movie.overview}
        />
      );
    });

    return movieComponents;
  }

  return (
    <>
      <NavigationBar />
      <h1>Now Playing</h1>
      <div className="movieGrid">
        {props.movies.data != undefined && getMovies(props.movies.data.results)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { movies: state.nowPlaying };
};

export default connect(mapStateToProps, { getNowPlaying })(NowPlaying);
