import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
    <h1>Character List</h1>
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
    </div>
  );
};

export default CharacterList;
