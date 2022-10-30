import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/pokemon";
import * as PokemonService from "../services/pokemon";

export function usePokemon(name: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    PokemonService
      .getByName(name)
      .then(setPokemon)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, pokemon, error };
}
