import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import MovieCard from "./MovieCard";


const Movie = (props) => {
  const params = useParams();
  const [movie, setMovie] = useState();
  console.log(params);
  useEffect(() => {
    const id = params.movieID;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars} />
    <div className="save-button" onClick={() => saveMovie()}>Save</div>
    </div>
  );
}

export default Movie;
