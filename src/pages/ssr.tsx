import { Pokemon } from "../interfaces/pokemon";
import * as PokemonService from "../services/pokemon";

type PageProps = {
  pokemon?: Pokemon;
  error?: Error;
};

export async function getServerSideProps() {
  try {
    const pokemon = await PokemonService.getByName("pachirisu");

    return {
      props: { pokemon },
    };
  } catch (error) {
    return { props: { error } };
  }
}

export default function WithHook({ pokemon, error }: PageProps) {
  return (
    <>
      {pokemon && <img src={pokemon.sprites.other.home.front_default} />}
      {error && <h1>No data :'(</h1>}
    </>
  );
}
