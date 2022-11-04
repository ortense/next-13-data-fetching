import { Pokemon } from "../../interfaces/pokemon";
import "./PokemonFigure.css";

type PokemonFigureProps = {
  data: Pokemon;
};

export function PokemonFigure({ data }: PokemonFigureProps) {
  return (
    <figcaption className="PokemonFigure">
      <img src={data.sprites.other.home.front_default} />
      <figcaption>
        #{data.id} {data.name}
      </figcaption>
    </figcaption>
  );
}
