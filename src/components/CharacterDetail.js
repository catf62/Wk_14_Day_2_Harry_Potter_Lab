import React, {Fragment} from 'react';

const CharacterDetail = (props) => {
  if (!props.character) return null;
  return (
    <Fragment>
    <h3>{props.character.name}</h3>
    <p>Species: {props.character.species}</p>
    <p>Gender: {props.character.gender}</p>
    <p>House: {props.character.house}</p>
    <img className="image" src={props.character.image} />

    </Fragment>
  );
}
export default CharacterDetail;
