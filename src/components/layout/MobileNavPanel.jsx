import { NavLink } from "react-router-dom";
import { navLinks, socialLinks } from "../../data/siteData";

export default function MobileNavPanel({ isOpen, onClose }) {
  return (
    <div id="navPanel" aria-hidden={!isOpen}>
      <nav>
        <ul className="links">
          {navLinks.map((link) => (
            <li key={`mobile-${link.to}`}>
              <NavLink to={link.to} end={link.end} onClick={onClose}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="icons alt">
          {socialLinks.map((social) => (
            <li key={`mobile-social-${social.href}`}>
              <a href={social.href} className={`${social.iconClass} alt`}>
                <span className="label">{social.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#navPanel"
        className="close"
        onClick={(event) => {
          event.preventDefault();
          onClose();
        }}
      >
        Close
      </a>
    </div>
  );
}
