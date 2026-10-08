import '../../styles/topics.css';

export default function TopicList({ items }) {
  return (
    <ul className="topics">
      {items.map((item) => (
        <li key={item} className="topics__item">{item}</li>
      ))}
    </ul>
  );
}
