import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import MovieCard from "./MovieCard";

const DEBUG_MESSAGE = false;

const Movie = (props) => {
  const location = useLocation(); // this location as String
  const parr = location.pathname ? location.pathname.split('/'):[]; // this locaiton as Array
  const movieID = parr.length > 0 ? parr[parr.length-1]:""; // Movie ID parsed from location.pathname
  const movie = props.movie;  // get state variable
  const setMovie = props.setMovie; // set state function()
  const addToSavedList = props.addToSavedList;
  
  useEffect(() => {
    if (DEBUG_MESSAGE) console.log(`MOVIE ID: ${movieID}`);

    axios
      .get(`http://localhost:5000/api/movies/${movieID}`)
      .then(response => {
        setMovie(response.data);
      })
      .then(
        (DEBUG_MESSAGE) ? console.log("movie details request complete"):true
        )
      .catch(error => {
        console.error(error);
      });
      return () => (DEBUG_MESSAGE) ? console.log("clean up movie details"):true;
  },[movieID, setMovie]);

  if (!props.movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard title={props.movie.title} director={props.movie.director} metascore={props.movie.metascore} stars={props.movie.stars} />
    <div className="save-button" onClick={() => addToSavedList(movie)}>Save</div>
    </div>
  );
}

export default Movie;
