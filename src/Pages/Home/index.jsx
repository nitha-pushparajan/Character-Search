import React from "react";
import Character from "../../Components/Character";
import Search from "../../Components/Search";

import { useState, useEffect } from "react";

function Home() {
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState({ name: "", status: "" });

  useEffect(() => {
    searchCharacters();
  }, [page, query]);

  function searchCharacters() {
    const filter = `page:${page},filter:{name:\"${query.name}\", status:\"${query.status}\"}`;
    fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{ characters(${filter}) {results {name, id, image}} }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const characters = data.data.characters.results;
        setCharacters({
          characters,
        });
        console.log(characters);
        setIsLoading(false);
      });
  }

  function onchange(value) {
    setQuery({...query,...value});
  }

  function loadNext() {
    setPage(page + 1);
  }
  return (
    <div>
      <Search handleChange={onchange} />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <ul className="character-list">
            {characters.characters &&
              characters.characters.length &&
              characters.characters.map((data) => (
                <Character key={data.id} {...data} />
              ))}
          </ul>
          <button className="next" onClick={loadNext}>
            Next Page
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
