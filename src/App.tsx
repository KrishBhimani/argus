import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { Pillars } from './sections/Pillars';
import { Tour } from './sections/Tour';
import { Privacy } from './sections/Privacy';
import { Footer } from './sections/Footer';

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Tour />
        <Privacy />
      </main>
      <Footer />
    </>
  );
}
