import { environment as c } from '../data/content.js';
import Section from './ui/Section.jsx';
import SplitIntro from './ui/SplitIntro.jsx';
import EditorialBlock from './ui/EditorialBlock.jsx';

export default function Environment() {
  return (
    <Section id={c.id} className="section--tight-top">
      <SplitIntro id={c.id} title={c.title} intro={c.intro} topics={c.topics} />
      <EditorialBlock
        className="stack-top"
        title={c.editorial.title}
        aside={
          <dl>
            {c.editorial.facts.map((f) => (
              <div key={f.term} className="editorial__fact">
                <dt>{f.term}</dt>
                <dd>{f.description}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <p>{c.editorial.text}</p>
      </EditorialBlock>
    </Section>
  );
}
