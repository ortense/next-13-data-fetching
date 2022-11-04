"use client";

import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";
import { PokemonFigure } from "../../components/PokemonFigure";
import { Pokemon } from "../../interfaces/pokemon";
import * as PokemonService from "../../services/pokemon";

function CodeExample() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    PokemonService
      .getByName("eevee")
      .then(setPokemon)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {pokemon && <PokemonFigure data={pokemon} />}
      {error && <h1>No data :'(</h1>}
    </>
  );
}

export default function Page() {
  return (
    <>
      <header>
        <h1>
          Client Side Render <span className="text-mono">useEffect</span>
        </h1>
        <p>
          When we migrated from class components to function components the
          natural way was to <strong>emulate</strong> the{" "}
          <a
            className="text-mono"
            href="https://reactjs.org/docs/react-component.html#componentdidupdate"
          >
            componentDidMount
          </a>{" "}
          method with the{" "}
          <a
            href="https://reactjs.org/docs/hooks-effect.html"
            className="text-mono"
          >
            useEffect
          </a>{" "}
          hook.
        </p>
      </header>
      <div className="flex-row">
        <CodeExample />
      </div>
      <footer>
        <p className="text-center">
          page source:{" "}
          <a
            className="text-mono"
            href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/use-effect/page.tsx"
          >
            src/app/use-effect/page.tsx
          </a>
        </p>
      </footer>
    </>
  );
}
