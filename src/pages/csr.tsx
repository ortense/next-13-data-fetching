import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/pokemon";
import * as PokemonService from "../services/pokemon";

export default function CSR() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    PokemonService
      .getByName("pikachu")
      .then(setPokemon)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {pokemon && <img src={pokemon.sprites.other.home.front_default} />}
      {error && <h1>No data :'(</h1>}
    </>
  );
}
