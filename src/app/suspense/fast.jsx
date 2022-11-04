import { PokemonFigure } from "../../components/PokemonFigure";
import * as PokemonService from "../../services/pokemon";

export default async function Raichu() { // is faster than Pikachu
  const pokemon = await PokemonService.getByName("raichu");
  return <PokemonFigure data={pokemon} />;
}
