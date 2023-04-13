import { useEffect, useState } from "react";
import Character from "./Character";
import "./List.css";

function List({ pattern }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(characters);
  console.log(characters.length);
  console.log("helloooo");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }

    fetchData();
  }, [characters.length]);

  console.log(characters.length);

  return (
    <div>
      <h2 className="list__title">Characters</h2>
      <div className="list__content">
        {loading ? (
          <div className="">Loading</div>
        ) : (
          characters
            .filter((character) => {
              return pattern.toLowerCase() === ""
                ? character
                : character.name.toLowerCase().includes(pattern);
            })
            .map((character) => {
              return (
                <Character
                  key={character.id}
                  name={character.name}
                  origin={character.origin}
                  image={character.image}
                />
              );
            })
        )}
      </div>
    </div>
  );
}

export default List;
