import Image from "next/image";
import tsError from "./images/ts-error.png";
import buildError from "./images/build-error.png";
import "./Reminder.css";

export function Reminder() {
  return (
    <blockquote className="Remainder">
      <summary>
        In this example I use <span className="text-mono">.jsx</span> instead of
        {" "}
        <span className="text-mono">.tsx</span> because this weird error.
      </summary>
      <details>
        <summary>details</summary>
        <Image
          alt="typescript error"
          width={960}
          src={tsError}
          placeholder="blur"
        />
        <Image
          alt="build error"
          width={960}
          src={buildError}
          placeholder="blur"
        />
      </details>
    </blockquote>
  );
}
