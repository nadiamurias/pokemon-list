import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const ListItem = props.data.map((pokemon, id) => {
    return (
      <li key={id}>
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });
  return (
    <div>
      <h1>Mi lista de pokemon</h1>
      <ul>{ListItem}</ul>
    </div>
  );
};
export default PokeList;
