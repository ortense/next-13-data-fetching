import { use } from "react";
import * as PokemonService from "../../services/pokemon";

export default function Page() {
  const pokemon = use(PokemonService.getByName("dedenne"));
  return <img src={pokemon.sprites.other.home.front_default} />;
}
