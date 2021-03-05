import Pokemon from "./Pokemon";
import "../stylesheets/PokeList.scss";
import PropTypes from "prop-types";

const PokeList = (props) => {
  const ListItem = props.data.map((pokemon) => {
    console.log(pokemon.id);
    return (
      <li className="list poke-list" key={pokemon.id}>
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });
  return (
    <div>
      <h1 className="title">Mi lista de pokemon</h1>
      <ul className="container">{ListItem}</ul>
    </div>
  );
};

PokeList.propTypes = {
  data: PropTypes.array,
};

export default PokeList;
