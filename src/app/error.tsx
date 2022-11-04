"use client";

type PageProps = { error: Error };

export default function Error({ error }: PageProps) {
  return (
    <>
      <section className="content">
        <header>
          <h1>Oh no! O_o</h1>
        </header>
        <pre className="text-mono text-small">
          {error.stack}
        </pre>
      </section>
    </>
  );
}
