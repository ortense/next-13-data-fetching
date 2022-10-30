# next-13-data-fetching

This is a example of different ways to [fetch data in Next.js@13](https://nextjs.org/blog/next-13#data-fetching)

## scripts

To install use

```bash
npm install
```

To run it use

```bash
npm run dev
```

## Examples


| What?                                     | URL              | Source code                      |
| ----------------------------------------- | ---------------- | -------------------------------- |
| Client Side render                        | `/csr`           | `src/pages/csr.tsx`              |
| Client Side render with custom hook       | `/csr-with-hook` | `src/pages/csr-with-hook.tsx`    | 
| Server side render                        | `/ssr`           | `src/pages/ssr.tsx`              |
| Server side `use` hook                    | `/use`           | `src/app/use/page.tsx`           |
| Server side `use` hook with error wrapper | `/error-wrapper` | `src/app/error-wrapper/page.tsx` |