import { PokemonFigure } from "../../components/PokemonFigure";
import * as PokemonService from "../../services/pokemon";
import { delay } from "../../utils";

export default async function Pikachu() { // is faster than Pichu
  await delay(2);
  const pokemon = await PokemonService.getByName("pikachu");
  return <PokemonFigure data={pokemon} />;
}
