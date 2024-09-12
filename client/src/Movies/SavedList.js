import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import styled from 'styled-components';

const HomeBtn = styled.div``

const SavedContainer = styled.div`
  color: #829ea1;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
  border-radius: 1rem;
  background-color: #194052
  transition: all .6s ease;
  :active, hover {
    color: #4ba9f0;
  }
`;

const SavedList = props => {
  const pathName = useLocation().pathname;
  if (pathName !== "/"){
    // console.log('not at home');
  }
  return (
  <SavedContainer className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => <NavLink key={ `key-${movie.id}-${Math.floor(Math.random()*255)}` } to={`/movies/${movie.id}`} >{movie.title}</NavLink>)}
    <NavLink key={ `${Math.floor(Math.random()*255)}` } to="/"><HomeBtn className="home-button">Home</HomeBtn></NavLink>
  </SavedContainer>  
);
}
export default SavedList;
