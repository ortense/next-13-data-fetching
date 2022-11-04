import { PokemonFigure } from "../../components/PokemonFigure";
import * as PokemonService from "../../services/pokemon";
import { delay } from "../../utils";

export default async function Pichu() { // Babies don't run fast!
  await delay(4);
  const pokemon = await PokemonService.getByName("pichu");
  return <PokemonFigure data={pokemon} />;
}
