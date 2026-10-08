import { indicators as c } from '../data/content.js';
import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import '../styles/indicators.css';

export default function Indicators() {
  return (
    <Section id="indicadores" className="section--bordered">
      <SectionHeading id="indicadores" title={c.title} intro={c.intro} />
      <ul className="indicators__grid">
        {c.items.map((item) => (
          <li key={item.label} className="indicator">
            {item.value && <span className="indicator__value">{item.value}</span>}
            <span className="indicator__label">{item.label}</span>
            {item.detail && <span className="indicator__detail">{item.detail}</span>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
