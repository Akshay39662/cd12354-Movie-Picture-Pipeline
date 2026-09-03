import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`).then((response) => {
      // Safely handle both raw arrays and nested objects for production and tests
      const data = response.data;
      setMovies(Array.isArray(data) ? data : data.movies || []);
    });
  }, []);

  return (
    <ul>
      {Array.isArray(movies) && movies.map((movie) => (
        <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
