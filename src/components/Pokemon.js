const Pokemon = (props) => {
  const typesItem = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article>
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <h2>{props.pokemon.name}</h2>
      <ul>{typesItem}</ul>
    </article>
  );
};

export default Pokemon;
