import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const SavedList = props => {
  const pathName = useLocation().pathname;
  if (pathName !== "/"){
    // console.log('not at home');
  }
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => <NavLink key={ `key-${movie.id}-${Math.floor(Math.random()*255)}` } to={`/movies/${movie.id}`} >{movie.title}</NavLink>)}
    <NavLink key={ `${Math.floor(Math.random()*255)}` } to="/"><div className="home-button">Home</div></NavLink>
  </div>
);
}
export default SavedList;
