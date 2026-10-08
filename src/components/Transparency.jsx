import { transparency as c } from '../data/content.js';
import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import '../styles/documents.css';

export default function Transparency() {
  return (
    <Section id={c.id}>
      <SectionHeading id={c.id} title={c.title} intro={c.intro} />
      <ul className="documents">
        {c.documents.map((doc) => (
          <li key={doc.label}>
            <a className="document" href={doc.href}>
              <span>
                {doc.label}
                {doc.note && <span className="document__note">{doc.note}</span>}
              </span>
              <span className="document__cta">{c.linkLabel}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
