import { PokemonFigure } from "../../components/PokemonFigure";
import { Reminder } from "../../components/Reminder";
import { PokemonService } from "../../services";

async function CodeExample() {
  const pokemon = await PokemonService.getByName("marill");

  return <PokemonFigure data={pokemon} />;
}

export default function Page() {
  return (
    <>
      <header>
        <h1>Async Server Component</h1>
        <p className="text-center">
          Now we can just use <span className="text-mono">async/away</span>{" "}
          in our components! 🤯
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
            href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/async/page.jsx"
          >
            app/async/page.jsx
          </a>
        </p>
        <Reminder />
      </footer>
    </>
  );
}
