import iso9001 from '../../assets/ISO-9001.webp';
import iso14001 from '../../assets/ISO-14001.webp';
import iso45001 from '../../assets/ISO-45001-Warpcom_2.webp';
import '../../styles/certifications.css';

const seals = {
  'iso-9001': iso9001,
  'iso-14001': iso14001,
  'iso-45001': iso45001,
};

export default function Certifications({ title, text, items }) {
  return (
    <div className="certifications">
      <div className="certifications__text">
        <h3 className="certifications__title">{title}</h3>
        <p>{text}</p>
      </div>
      <ul className="certifications__list">
        {items.map((item) => (
          <li key={item.id} className="certification">
            <div className="certification__seal">
              <img src={seals[item.id]} alt={item.alt} />
            </div>
            <strong className="certification__label">{item.label}</strong>
            <span className="certification__description">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
