import { use } from "react";
import { PokemonFigure } from "../../components/PokemonFigure";
import { Pokemon } from "../../interfaces/pokemon";
import { PokemonService } from "../../services";

type Data = { pokemon?: Pokemon; error?: Error };

async function getData(): Promise<Data> {
  try {
    const pokemon = await PokemonService.getByName("togedemaru");
    return { pokemon };
  } catch (error) {
    return { error: error as Error };
  }
}

function CodeExample() {
  const { pokemon, error } = use(getData());
  return (
    <>
      {pokemon && <PokemonFigure data={pokemon} />}
      {error && <h1>No data :'(</h1>}
    </>
  );
}

export default function Page() {
  return (
    <article>
      <header>
        <h1>
          Handle errors on server side components<br />with{" "}
          <span className="text-mono">use</span> hook
        </h1>
        <p>
          At the moment if are working with use hook and want to handle errors
          from a rejected Promise on the server the easier way is to create a
          "wrapper" function.
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
            href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/use-and-error-handler/page.tsx"
          >
            src/app/use-and-error-handler/page.tsx
          </a>
        </p>
      </footer>
    </article>
  );
}
