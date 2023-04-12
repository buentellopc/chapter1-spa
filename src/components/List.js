import { useEffect, useState } from "react";
import Character from "./Character";

function List() {
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
      <h2>Characters</h2>
      {loading ? (
        <div>Loading</div>
      ) : (
        characters.map((character) => {
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
  );
}

export default List;
