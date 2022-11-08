import { PokemonFigure } from "../../components/PokemonFigure";
import { PokemonService } from "../../services";

export default async function Raichu() { // is faster than Pikachu
  const pokemon = await PokemonService.getByName("raichu");
  return <PokemonFigure data={pokemon} />;
}
