export default function SectionHeading({ id, title, intro }) {
  return (
    <>
      <h2 id={`${id}-title`}>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </>
  );
}
