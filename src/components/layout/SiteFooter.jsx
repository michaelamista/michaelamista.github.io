import { socialLinks } from "../../data/siteData";

export default function SiteFooter() {
  return (
    <footer id="footer">
      <section className="footer-row">
        <section className="alt">
          <h3>Address</h3>
          <p>Vo' (Padova), 35030, Italy</p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <a href="mailto:amistamichael@gmail.com">amistamichael@gmail.com</a>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <ul className="icons alt">
            {socialLinks.map((social) => (
              <li key={`footer-${social.href}`}>
                <a href={social.href} className={social.iconClass}>
                  <span className="label">{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </footer>
  );
}
