import { NavigationBar } from './NavigationBar';

import { connect } from 'react-redux';
import { getTopRated } from '../state/actionCreators';
import { useEffect } from 'react';
import MovieCard from './MovieCard';

import './style.css';

const Home = (props) => {
  useEffect(() => {
    props.getTopRated();
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
      <h1> Top Rated Movies</h1>
      <div className="movieGrid">
        {props.movies.data != undefined && getMovies(props.movies.data.results)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { movies: state.topMovies };
};
export default connect(mapStateToProps, { getTopRated })(Home);
