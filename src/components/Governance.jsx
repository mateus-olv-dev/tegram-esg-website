import { governance as c } from '../data/content.js';
import Section from './ui/Section.jsx';
import SplitIntro from './ui/SplitIntro.jsx';
import EditorialBlock from './ui/EditorialBlock.jsx';
import Certifications from './ui/Certifications.jsx';
import awardsImage from '../assets/premios-esg.jpg';
import sealImage from '../assets/selo-ghg-prata-2025.jpg';
import '../styles/recognition.css';

export default function Governance() {
  const r = c.recognition;
  return (
    <Section id={c.id}>
      <SplitIntro id={c.id} title={c.title} intro={c.intro} topics={c.topics} layout="stacked" />
      <EditorialBlock className="stack-top" tone="light" title={c.safety.title}>
        <p>{c.safety.text}</p>
      </EditorialBlock>
      <Certifications {...c.certifications} />
      <div className="recognition">
        <div className="recognition__content">
          <h3 className="recognition__title">{r.title}</h3>
          <p>{r.text}</p>
          <div className="recognition__seal">
            <img src={sealImage} alt={r.sealAlt} />
            <div>
              <h4 className="recognition__seal-title">{r.sealTitle}</h4>
              <p>
                {r.sealText.before}
                <em>{r.sealText.emphasis}</em>
                {r.sealText.after}
              </p>
            </div>
          </div>
        </div>
        <figure className="recognition__poster">
          <img src={awardsImage} alt={r.awardsAlt} />
        </figure>
      </div>
    </Section>
  );
}
