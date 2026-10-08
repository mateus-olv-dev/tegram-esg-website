/* Seção de página com landmark acessível: o título (h2) deve ter id `${id}-title`. */
export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}>
      <div className="container">{children}</div>
    </section>
  );
}
