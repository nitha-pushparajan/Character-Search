import React from "react";
import Character from "../../Components/Character";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CharacterDetail(props) {
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{ charactersByIds(ids:[${characterId}]) {name, id, image, status, species, type, gender, origin{name}, location{name}, image, episode{name, episode}, created} }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const character = data.data.charactersByIds[0];
        console.log(character);
        setCharacter({
          character,
        });
        setIsLoading(false);
      });
  }, [characterId]);
  return (
    <>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <ul className="character-detail">
          <Character {...character.character} showDetails={true} />
        </ul>
      )}
    </>
  );
}

export default CharacterDetail;
