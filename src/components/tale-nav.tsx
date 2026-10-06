import { Link } from "@tanstack/react-router";

export function TaleNav() {
  return (
    <nav className="mx-auto flex max-w-xl gap-6 px-5 py-4 text-sm">
      <Link
        to="/"
        className="text-muted"
        activeProps={{ className: "text-ink" }}
        activeOptions={{ exact: true }}
      >
        The tale
      </Link>
      <Link to="/road" className="text-muted" activeProps={{ className: "text-ink" }}>
        The road
      </Link>
    </nav>
  );
}
