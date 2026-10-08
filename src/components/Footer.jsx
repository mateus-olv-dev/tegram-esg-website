import { footer as c } from '../data/content.js';
import logo from '../assets/logo-tegram.jpg';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer id={c.id} className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <img className="footer__logo" src={logo} alt="TEGRAM Itaqui" />
            <p>{c.description}</p>
          </div>
          {c.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="footer__title">{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="footer__copy">{c.copyright}</p>
      </div>
    </footer>
  );
}
