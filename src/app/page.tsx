import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-uppercase">💫 Data fetching Next.js 13 ✨</h1>
        <p className="text-center">
          This is a collection of examples on how to{" "}
          <a href="https://nextjs.org/blog/next-13#data-fetching">
            fetching data in Next.js 13
          </a>
        </p>
      </header>
      <table>
        <thead>
          <tr>
            <th>What?</th>
            <th>URL</th>
            <th>Source code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Component with <span className="text-mono">useEffect</span>
            </td>
            <td>
              <Link href="/use-effect">/use-effect</Link>
            </td>
            <td>
              <a href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/use-effect/page.tsx">
                src/app/use-effect/page.tsx
              </a>
            </td>
          </tr>
          <tr>
            <td>Create a custom hook</td>
            <td>
              <Link href="/custom-hook">/custom-hook</Link>
            </td>
            <td>
              <a href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/custom-hook/page.tsx">
                src/app/custom-hook/page.tsx
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Next.js introduces{" "}
              <span className="text-mono">getServerSideProps</span>
            </td>
            <td>
              <Link href="/get-server-side-props">/get-server-side-props</Link>
            </td>
            <td>
              <a href="https://github.com/ortense/next-13-data-fetching/blob/main/src/pages/get-server-side-props.tsx">
                src/pages/get-server-side-props.tsx
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Server side with <span className="text-mono">use</span> hook
            </td>
            <td>
              <Link href="/use">/use</Link>
            </td>
            <td>
              <a href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/use/page.tsx">
                src/app/use/page.tsx
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Handle errors on server <span className="text-mono">use</span>
              {" "}
              hook
            </td>
            <td>
              <Link href="/use-and-error-handler">/use-and-error-handler</Link>
            </td>
            <td>
              <a href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/use-and-error-handler/page.tsx">
                src/app/use-and-error-handler/page.tsx
              </a>
            </td>
          </tr>
          <tr>
            <td>Async component</td>
            <td>
              <Link href="/async">/async</Link>
            </td>
            <td>
              <a href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/async/page.jsx">
                src/app/async/page.jsx
              </a>
            </td>
          </tr>
          <tr>
            <td>
              The <span className="text-mono">&lt;Suspense&gt;</span> component
            </td>
            <td>
              <Link href="/suspense">/suspense</Link>
            </td>
            <td>
              <a href="https://github.com/ortense/next-13-data-fetching/blob/main/src/app/suspense/page.jsx">
                src/app/suspense/page.jsx
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
