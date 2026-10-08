import '../../styles/highlights.css';

/* variant: 'primary' (azul) | 'plain'. bigSize: 'small' para textos longos como "FAPEMA". */
export default function Highlight({ variant = 'plain', big, bigSize, title, text, source }) {
  const bigClass = `highlight__big${bigSize === 'small' ? ' highlight__big--small' : ''}`;
  return (
    <article className={`highlight highlight--${variant}`}>
      <span className={bigClass}>{big}</span>
      <h3 className="highlight__title">{title}</h3>
      <p>{text}</p>
      {source && <p className="highlight__source">{source}</p>}
    </article>
  );
}
