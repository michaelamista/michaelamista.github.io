import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { navLinks, socialLinks } from "../../data/siteData";

function NavItem({ to, end, label }) {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: Boolean(end) });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default function SiteNav() {
  return (
    <nav id="nav">
      <ul className="links">
        {navLinks.map((link) => (
          <NavItem key={link.to} to={link.to} end={link.end} label={link.label} />
        ))}
      </ul>
      <ul className="icons">
        {socialLinks.map((social) => (
          <li key={social.href}>
            <a href={social.href} className={social.iconClass}>
              <span className="label">{social.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
