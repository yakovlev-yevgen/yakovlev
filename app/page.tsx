import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Feedback } from '@/sections/Feedback';
import { Reviews } from '@/sections/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Feedback />
    </>
  );
}
