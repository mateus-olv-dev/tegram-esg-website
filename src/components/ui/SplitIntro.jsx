import SectionHeading from './SectionHeading.jsx';
import TopicList from './TopicList.jsx';

/* Padrão repetido: título + texto à esquerda, lista de tópicos à direita.
   Com layout="stacked", o título fica acima e os tópicos viram cartões em grade horizontal. */
export default function SplitIntro({ id, title, intro, topics, layout = 'split' }) {
  if (layout === 'stacked') {
    return (
      <div className="intro-stacked">
        <SectionHeading id={id} title={title} intro={intro} />
        <TopicList items={topics} variant="cards" />
      </div>
    );
  }

  return (
    <div className="split">
      <div><SectionHeading id={id} title={title} intro={intro} /></div>
      <TopicList items={topics} />
    </div>
  );
}
