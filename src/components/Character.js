import "./Character.css";

function Character(character) {
  return (
    <div className="card">
      <div className="card__img">
        <img
          loading="lazy"
          src={character.image}
          alt={character.name}
          width="300"
        />
      </div>
      <div className="card__info">
        <h3 className="card__info--name">{character.name}</h3>
        <p className="card__info--origin">
          <strong>Origin: </strong>
          {`${character.origin && character.origin.name}`}
        </p>
      </div>
    </div>
  );
}

export default Character;
