import { use } from "react";
import { Pokemon } from "../../interfaces/pokemon";
import * as PokemonService from "../../services/pokemon";

type Data = { pokemon?: Pokemon; error?: Error };

const getData = async (): Promise<Data> => {
  try {
    const pokemon = await PokemonService.getByName("togedemaru");
    return { pokemon };
  } catch (error) {
    return { error: error as Error };
  }
};

export default function Page() {
  const { pokemon, error } = use(getData());
  return (
    <>
      {pokemon && <img src={pokemon.sprites.other.home.front_default} />}
      {error && <h1>No data :'(</h1>}
    </>
  );
}
