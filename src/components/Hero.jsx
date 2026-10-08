import { hero } from '../data/content.js';
import heroImage from '../assets/hero.jpg';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero" style={{ '--hero-image': `url(${heroImage})` }} aria-labelledby="hero-title">
      <div className="container hero__content">
        <h1 id="hero-title" className="hero__title">{hero.title}</h1>
        <p className="hero__headline">{hero.headline}</p>
        <p className="hero__text">{hero.text}</p>
      </div>
      <a className="scroll-cue" href={hero.scrollTarget}>
        <span className="scroll-cue__line" aria-hidden="true" />
        {hero.scrollLabel}
      </a>
    </section>
  );
}
