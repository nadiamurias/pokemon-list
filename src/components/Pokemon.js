import "../stylesheets/Pokemon.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const typesItem = props.pokemon.types.map((type, index) => {
    return (
      <li className="list type-list" key={index}>
        {type}
      </li>
    );
  });
  return (
    <article>
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <h2 className="pokemon-name">{props.pokemon.name}</h2>
      <ul className="types">{typesItem}</ul>
    </article>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.share({
    types: PropTypes.array,
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default Pokemon;
