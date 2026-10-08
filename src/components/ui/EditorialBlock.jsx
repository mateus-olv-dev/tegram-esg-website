import '../../styles/editorial.css';

/* tone: 'dark' (fundo verde) | 'light' (filete verde à esquerda). `aside` é opcional. */
export default function EditorialBlock({ title, tone = 'dark', aside, className = '', children }) {
  return (
    <article className={`editorial editorial--${tone} ${className}`.trim()}>
      <div className="editorial__text">
        <h3 className="editorial__title">{title}</h3>
        {children}
      </div>
      {aside && <div className="editorial__aside">{aside}</div>}
    </article>
  );
}
