import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
import"./MovieList.css"
const MovieList = ({ filtredMovies }) => {
  return (
    <div className='list'>
      {filtredMovies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MovieList