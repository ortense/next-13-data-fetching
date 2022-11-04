import { Suspense } from "react";
import { Loader } from "../../components/Loader";
import { Reminder } from "../../components/Reminder";

import Fast from "./fast";
import Slow from "./slow";
import Slowest from "./slowest";

export function CodeExample() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Fast />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Slow />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Slowest />
      </Suspense>
    </>
  );
}

export default function Page() {
  return (
    <>
      <header>
        <h1>
          On demand loading with{" "}
          <span className="text-mono">&lt;Suspense&gt;</span>
        </h1>
        <p>
          Load content as soon as it's ready. With the o{" "}
          <span className="text-mono">&lt;Suspense&gt;</span>{" "}
          we can choose what is needed for the first paint and delay the rest.
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
            href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/suspense/page.jsx"
          >
            app/suspense/page.jsx
          </a>
        </p>
        <Reminder />
      </footer>
    </>
  );
}
