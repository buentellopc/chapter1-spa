import { useEffect, useState } from "react";
import Character from "./Character";
import "./List.css";

function List({ pattern }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters((previous) => {
        return [...previous, ...results];
      });
      setLoading(false);
      setLoadingMore(false);
      console.log("loadingMore fetch", loadingMore);
    }

    setTimeout(fetchData, 1200);
  }, [page]);

  console.log(characters.length);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    if (windowHeight + scrollTop + 1 >= scrollHeight) {
      setLoadingMore(true);
      setPage((previous) => previous + 1);
      console.log("loadingMore scroll", loadingMore);
    }
  };

  useEffect(() => {
    // loadCharacters();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h2 className="list__title">Characters</h2>
      <div className="list__content">
        {loading ? (
          <div>Loading...</div>
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
      {loadingMore && (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default List;
