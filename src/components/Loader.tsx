export function Loader() {
  return (
    <span
      style={{
        padding: "1em",
        fontFamily: "sans-serif",
        fontSize: 24,
        fontWeight: 700,
        background: "linear-gradient(60deg, #e66465, #9198e5)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textTransform: "uppercase",
      }}
    >
      loading...
    </span>
  );
}
