import "./app.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <head></head>
      <body>
        <section className="content">
          {children}
        </section>
      </body>
    </html>
  );
}
