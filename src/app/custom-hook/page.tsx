"use client";
import { Loader } from "../../components/Loader";
import { PokemonFigure } from "../../components/PokemonFigure";
import { usePokemon } from "../../hooks/usePokemon";

function CodeExample() {
  const { isLoading, pokemon, error } = usePokemon("psyduck");

  return (
    <>
      {isLoading && <Loader />}
      {pokemon && <PokemonFigure data={pokemon} />}
      {error && <h1>No data :'(</h1>}
    </>
  );
}

export default function WithCustomHook() {
  return (
    <article>
      <header>
        <h1>Client side render with custom hook</h1>
        <p>
          This example use a custom hook{" "}
          <span className="text-mono">usePokemon</span>{" "}
          to abstract the fetching logic. You can see the source code of hook in
          {" "}
          <a
            className="text-mono"
            href="https://github.com/ortense/next-13-data-fetching/blob/main/src/hooks/usePokemon.ts"
          >
            src/hooks/usePokemon.ts
          </a>
          {" "}
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
            href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/custom-hook/page.tsx"
          >
            src/app/custom-hook/page.tsx
          </a>
        </p>
      </footer>
    </article>
  );
}
