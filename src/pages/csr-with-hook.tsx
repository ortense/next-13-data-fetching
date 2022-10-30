import { usePokemon } from "../hooks/usePokemon";

export default function WithHook() {
  const { isLoading, pokemon, error } = usePokemon("pichu");

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {pokemon && <img src={pokemon.sprites.other.home.front_default} />}
      {error && <h1>No data :'(</h1>}
    </>
  );
}
