import React from 'react';

const CharacterDetails = (props) => {



  if (!props.character) return null;
  return (
    <React.Fragment>
      <h3>{props.character.name}</h3>
      <p>House: {props.character.house}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Year of Birth: {props.character.yearOfBirth}</p>
      <p>Ancestry: {props.character.ancestry}</p>
      <p>Actor: {props.character.actor}</p>
    </React.Fragment>
  )
};

export default CharacterDetails;
