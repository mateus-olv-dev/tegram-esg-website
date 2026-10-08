import { pillars } from '../data/content.js';
import Section from './ui/Section.jsx';
import '../styles/pillars.css';

export default function Pillars() {
  return (
    <Section id="pilares">
      <h2 id="pilares-title">{pillars.title}</h2>
      <ul className="pillars__list">
        {pillars.items.map((item) => (
          <li key={item.id}>
            <a className="pillar" href={`#${item.id}`}>
              <h3 className="pillar__label">{item.label}</h3>
              <strong className="pillar__headline">{item.headline}</strong>
              <p className="pillar__highlight">{item.highlight}</p>
              <span className="pillar__link">{pillars.linkLabel}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
