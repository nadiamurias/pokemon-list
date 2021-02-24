import Pokemon from "./Pokemon";
import "../stylesheets/PokeList.scss";

const PokeList = (props) => {
  const ListItem = props.data.map((pokemon, id) => {
    return (
      <li className="list poke-list" key={id}>
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
export default PokeList;
