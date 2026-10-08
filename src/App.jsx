import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero.jsx';
import Pillars from './components/Pillars.jsx';
import Environment from './components/Environment.jsx';
import People from './components/People.jsx';
import Governance from './components/Governance.jsx';
import Indicators from './components/Indicators.jsx';
import Transparency from './components/Transparency.jsx';
import Commitments from './components/Commitments.jsx';
import Footer from './components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger);

/* O header institucional fica fora deste projeto (já existe na implementação do site). */
export default function App() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      // Na hero, só o texto anima; o fundo (imagem) permanece fixo.
      const targets = [
        ...gsap.utils.toArray('.hero__content', pageRef.current),
        ...gsap.utils.toArray('section:not(.hero)', pageRef.current),
      ];

      targets.forEach((target) => {
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 90, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 80%',
              toggleActions: 'restart none restart none',
            },
          }
        );
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <main>
        <Hero />
        <Pillars />
        <Environment />
        <People />
        <Governance />
        <Indicators />
        <Transparency />
        <Commitments />
      </main>
      <Footer />
    </div>
  );
}
