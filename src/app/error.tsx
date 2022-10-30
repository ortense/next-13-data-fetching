"use client";

type PageProps = { error: Error };

export default function Error({ error }: PageProps) {
  return (
    <>
      <h1>No data :'(</h1>
      <pre>
      {error.message}
      {error.stack}
      </pre>
    </>
  );
}
