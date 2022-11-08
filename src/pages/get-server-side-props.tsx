import Head from "next/head";
import { PokemonFigure } from "../components/PokemonFigure";
import { Pokemon } from "../interfaces/pokemon";
import { PokemonService } from "../services";
import "../app/app.css";

type PageProps = {
  pokemon?: Pokemon;
  error?: Error;
};

export async function getServerSideProps() {
  try {
    const pokemon = await PokemonService.getByName("slowking");

    return {
      props: { pokemon },
    };
  } catch (error) {
    return { props: { error } };
  }
}

export default function CodeExample({ pokemon, error }: PageProps) {
  return (
    <PageWrapper>
      {pokemon && <PokemonFigure data={pokemon} />}
      {error && <h1>No data :'(</h1>}
    </PageWrapper>
  );
}

type PageWrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Head>
        <title>💫 Data fetching Next.js 13 ✨</title>
      </Head>
      <section className="content">
        <header>
          <h1>
            Next.js introduces{" "}
            <span className="text-mono">getServerSideProps</span>
          </h1>
          <p>
            The big change with Next.js was the possibility of fetching data on
            the server side and pass to components as props. Becoming the
            easiest way to render on the server side with React.
          </p>
        </header>
        <div className="flex-row">
          {children}
        </div>
        <footer>
          <p className="text-center">
            page source:{" "}
            <a
              className="text-mono"
              href="https://github.com/ortense/next-13-data-fetching/blob/main/src/pages/get-server-side-props.tsx"
            >
              src/pages/get-server-side-props.tsx
            </a>
          </p>
        </footer>
      </section>
    </>
  );
}
