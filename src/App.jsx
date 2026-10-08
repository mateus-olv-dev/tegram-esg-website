import Hero from './components/Hero.jsx';
import Pillars from './components/Pillars.jsx';
import Environment from './components/Environment.jsx';
import People from './components/People.jsx';
import Governance from './components/Governance.jsx';
import Indicators from './components/Indicators.jsx';
import Transparency from './components/Transparency.jsx';
import Commitments from './components/Commitments.jsx';
import Footer from './components/Footer.jsx';

/* O header institucional fica fora deste projeto (já existe na implementação do site). */
export default function App() {
  return (
    <>
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
    </>
  );
}
