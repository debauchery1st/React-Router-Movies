import React from 'react';
import {NavLink} from 'react-router-dom';

const SavedList = props => {
  
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => <NavLink key={ `key-${movie.id}-${Math.floor(Math.random()*255)}` } to={`/movies/${movie.id}`} >{movie.title}</NavLink>)}
    <NavLink key={ `${Math.floor(Math.random()*255)}` }  to="/"><div className="home-button">Home</div></NavLink>
  </div>
);
}
export default SavedList;
