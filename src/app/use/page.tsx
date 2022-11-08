import { use } from "react";
import { PokemonFigure } from "../../components/PokemonFigure";
import { PokemonService } from "../../services";

function CodeExample() {
  const pokemon = use(PokemonService.getByName("dedenne"));

  return <PokemonFigure data={pokemon} />;
}

export default function Page() {
  return (
    <article>
      <header>
        <h1>
          Server side with <span className="text-mono">use</span> hook
        </h1>
        <p className="text-center">
          A new{" "}
          <a href="https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md">
            feature proposal
          </a>{" "}
          for React Core Team to give first class support for{" "}
          <span className="text-mono">Promises</span> inside React components
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
            href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/use/page.tsx"
          >
            src/app/use/page.tsx
          </a>
        </p>
      </footer>
    </article>
  );
}
