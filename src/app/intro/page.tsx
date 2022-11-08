import Image from "next/image";
import Link from "next/link";
import pokeapi from "./images/pokeapi.png";
import dependencies from "./images/package-dependencies.png";
import pokemonservice from "./images/pokemon-service.png";
import experimental from "./images/experimental.png";
import forceCache from "./images/force-cache.png";
import noStore from "./images/no-store.png";
import ravalidate from "./images/ravalidate.png";
import pikachu from "./images/pikachu.png";

import "./intro.css";

export default function Page() {
  return (
    <article className="intro">
      <header>
        <h1>What is this app?!</h1>
        <p className="text-center">
          This is a collection of examples on how to{" "}
          <a href="https://nextjs.org/blog/next-13#data-fetching">
            fetching data in Next.js 13
          </a>
        </p>
      </header>
      <div className="flex-row flex-space-between">
        <div className="flex-column">
          <p>
            This is a webapp made only with{" "}
            <a href="https://nextjs.org/">Next.js</a> and written in{" "}
            <a href="https://www.typescriptlang.org/">typescript</a>. No other
            dependencies have been added here.
          </p>
          <p>
            The goal is to know what's new about data{" "}
            <a href="https://beta.nextjs.org/docs/data-fetching/fundamentals">
              fetching in Next.js 13
            </a>{" "}
            🎉
          </p>
        </div>
        <Image src={dependencies} alt="package.json dependencies" width={680} />
      </div>
      <div className="flex-row flex-space-between">
        <div className="flex-column">
          <p className="warning">🚨 This app use an experimental tecnology!</p>
          <p>
            The{" "}
            <a
              className="text-mono"
              href="https://nextjs.org/blog/next-13#new-app-directory-beta"
            >
              /app
            </a>{" "}
            directory is currently in beta and not recommend using it in
            production.
          </p>
          <p>
            This directory allow support for a new way to{" "}
            <a
              href="https://nextjs.org/blog/next-13#data-fetching"
              className="text-mono"
            >
              Data Fetching
            </a>,{" "}
            <a
              href="https://nextjs.org/blog/next-13#server-components"
              className="text-mono"
            >
              Server Components
            </a>{" "}
            and more.
          </p>
        </div>
        <Image src={experimental} alt="package.json dependencies" width={580} />
      </div>
      <div className="flex-row">
        <div className="flex-column">
          <p>
            All examples were made using{" "}
            <a href="https://pokeapi.co/" className="text-mono">pokeapi.co</a>,
            a{" "}
            <a href="https://github.com/phalt/pokeapi" className="text-mono">
              RESTful API in python
            </a>{" "}
            that with more than 800 pokemon!
          </p>
          <p>
            Thx <a href="https://github.com/phalt">Paul Hallett</a>! 🫶
          </p>
        </div>
        <Image src={pokeapi} alt="pokeapi.co home screenshot" width={600} />
      </div>

      <div className="flex-row flex-space-between">
        <div className="flex-column">
          <p>
            Whenever you see{" "}
            <span className="text-mono">PokemonService.getByName</span>, I'm
            using this file, a simple fetch to pokeapi.co.
          </p>
          <p>This is where the news starts! 👀</p>
        </div>
        <Image
          src={pokemonservice}
          alt="pokeapi.co home screenshot"
          width={680}
        />
      </div>
      <h2>
        Now Next.js can understand fetch more{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters"
          className="text-mono"
        >
          similarly to browsers API
        </a>.
      </h2>

      <div className="flex-row">
        <div className="flex-column">
          <p>
            Instead of <span className="text-mono">getServerSideProps</span>
            {" "}
            we can use fetch with <span className="text-mono">no-store</span>
          </p>
        </div>
        <Image src={noStore} alt="pokeapi.co home screenshot" width={680} />
      </div>
      <div className="flex-row">
        <div className="flex-column">
          <p>
            Instead of <span className="text-mono">getStaticProps</span>{" "}
            we can use fetch with <span className="text-mono">force-cache</span>
          </p>
        </div>
        <Image src={forceCache} alt="pokeapi.co home screenshot" width={680} />
      </div>
      <div className="flex-row">
        <div className="flex-column">
          <p>
            Now we can add the <span className="text-mono">revalidate</span>
            {" "}
            configuration directly in fetch
          </p>
        </div>
        <Image src={ravalidate} alt="pokeapi.co home screenshot" width={680} />
      </div>
      <footer className="flex-row">
        <Link className="huge" href="/">Go to examples!</Link>
        <Image src={pikachu} alt="pokeapi.co home screenshot" width={100} />
      </footer>
    </article>
  );
}
