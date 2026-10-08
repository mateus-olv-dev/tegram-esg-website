import '../../styles/topics.css';
import TopicIcon from './TopicIcon.jsx';

/* Cada item pode ser uma string ou { label, icon }. O ícone só é exibido na variante "cards". */
export default function TopicList({ items, variant }) {
  const className = variant ? `topics topics--${variant}` : 'topics';
  return (
    <ul className={className}>
      {items.map((item) => {
        const { label, icon } = typeof item === 'string' ? { label: item } : item;
        return (
          <li key={label} className="topics__item">
            {variant === 'cards' && icon && <TopicIcon name={icon} />}
            {label}
          </li>
        );
      })}
    </ul>
  );
}
