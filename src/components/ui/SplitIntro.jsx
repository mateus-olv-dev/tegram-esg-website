import SectionHeading from './SectionHeading.jsx';
import TopicList from './TopicList.jsx';

/* Padrão repetido: título + texto à esquerda, lista de tópicos à direita. */
export default function SplitIntro({ id, title, intro, topics }) {
  return (
    <div className="split">
      <div><SectionHeading id={id} title={title} intro={intro} /></div>
      <TopicList items={topics} />
    </div>
  );
}
