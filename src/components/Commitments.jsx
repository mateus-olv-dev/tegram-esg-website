import { commitments as c } from '../data/content.js';
import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import '../styles/commitments.css';

export default function Commitments() {
  return (
    <Section id="compromissos" className="section--bordered">
      <SectionHeading id="compromissos" title={c.title} />
      <ol className="commitments__list">
        {c.items.map((item) => (
          <li key={item} className="commitments__item">{item}</li>
        ))}
      </ol>
    </Section>
  );
}
