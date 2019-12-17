import React, { useState } from 'react';
import {Route, useHistory } from 'react-router-dom';
import {Movie, MovieList, SavedList} from './Movies';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movie, setMovie] = useState();

  const addToSavedList = movie => {
    !savedList.find((item) => item.id === movie.id)
    ? setSavedList( [...savedList, movie] )
    : alert(`this movie has already been saved`);
  }

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/"><MovieList /></Route>
      <Route path="/movies/:movieID"><Movie history={useHistory()} addToSavedList={addToSavedList} movie={movie} setMovie={setMovie}/></Route>
    </div>
  );
};

export default App;
