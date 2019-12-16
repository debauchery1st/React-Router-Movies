import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import {Movie, MovieList, SavedList} from './Movies';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/"><MovieList /></Route>
      <Route path="/movies/:movieID"><Movie /></Route>
    </div>
  );
};

export default App;
