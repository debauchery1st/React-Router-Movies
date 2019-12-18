import React from 'react';
import styled from 'styled-components';

const MoviesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;  
  justify-content: space-evenly;
`;

const MC = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  background-color: #0f2b36
  color: #cccccc;
  border-radius: 1rem;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
  transition: all .5s ease;
  transform-style: preserve-3d;
  :active, :hover {
    transform: rotateY(18deg);
  }
  backface-visibility: hidden;
`;

const MCflipped = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  background-color: #0f2b36
  color: #cccccc;
  border-radius: 1rem;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
  transition: all .5s ease;
  transform-style: preserve-3d;
  :clock {
    transform: rotateY(180deg);
  }
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Title = styled.h2`
  font-family: Sans-Serif;
  letter-spacing: 1px;
`
const Director = styled.div`
  font-family: Sans-Serif;
  letter-spacing: 2px;
  text-decoration: none;
`;

const Metascore = styled.div`
  font-family: Sans-Serif;
  font-size: 1rem;  
  letter-spacing: 1px;
`;


const MovieCard = props => {
  return(
    <MC className="movie-card">
      <Title>{props.title}</Title>
      <Director className="movie-director">
        Director: <em>{props.director}</em>
      </Director>
      <Metascore className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </Metascore>
      <h3>Actors</h3>

      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}


    </MC>
  );
}

export {MovieCard, MoviesContainer};
