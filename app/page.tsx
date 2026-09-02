import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import { Hero } from '@/components/landing/Hero';
import { Pillars } from '@/components/landing/Pillars';
import { Tour } from '@/components/landing/Tour';
import { Privacy } from '@/components/landing/Privacy';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <HomeLayout {...baseOptions}>
      <main className="bg-bg-0 text-ink-0">
        <Hero />
        <Pillars />
        <Tour />
        <Privacy />
      </main>
      <Footer />
    </HomeLayout>
  );
}
