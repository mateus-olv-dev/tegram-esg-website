import { people as c } from '../data/content.js';
import Section from './ui/Section.jsx';
import SplitIntro from './ui/SplitIntro.jsx';
import Highlight from './ui/Highlight.jsx';

export default function People() {
  return (
    <Section id={c.id}>
      <SplitIntro id={c.id} title={c.title} intro={c.intro} topics={c.topics} />
      <div className="highlights">
        {c.highlights.map(({ id, ...props }) => (
          <Highlight key={id} {...props} />
        ))}
      </div>
    </Section>
  );
}
