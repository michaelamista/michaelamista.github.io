import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header id="header">
      <Link to="/" className="logo">
        Michael Amista'
      </Link>
    </header>
  );
}
