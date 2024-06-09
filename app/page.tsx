import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Feedback } from '@/sections/Feedback';
import { Reviews } from '@/sections/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Reviews />
      <Feedback />
    </>
  );
}
