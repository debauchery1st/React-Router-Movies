import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {MovieCard, MoviesContainer} from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      new axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <MoviesContainer className="movie-list">
      
      {movies.map(movie => (
        <NavLink key={ `key-${movie.id}-${Math.floor(Math.random()*255)}` } to={`/movies/${movie.id}`}>
          <MovieDetails key={`details-${movie.id}-${Math.floor(Math.random()*255)}`} movie={movie} />
        </NavLink>
      ))}
    </MoviesContainer>
  );
}

function MovieDetails({ movie }) {
  // const { title, director, metascore, stars } = movie;
  return (
    <MovieCard key={`card-${movie.title}-${Math.floor(Math.random()*255)}`} title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars} />
  );
}

export default MovieList;
