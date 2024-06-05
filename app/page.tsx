import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Feedback } from '@/sections/Feedback';

import { PrinciplesList } from '@/components/modules/PrinciplesList';
import { ServiceCard } from '@/components/ui-kit/ServiceCard';
import { Ticker } from '@/components/modules/Ticker';

export default function Home() {
  return (
    // here below will be all the sections
    <>
      <Hero />
      <About />
      <Feedback />

      <Ticker />
      <PrinciplesList />
      <ServiceCard
        title="Гипнотерапия"
        priceFiveSessions={100}
        priceOneSession={50}
        imageUrl="https://armyinform.com.ua/wp-content/uploads/2023/12/1-100-e1703144488424.jpg"
        description="Использование гипноза для лечения и облегчения психологических травм, а также поиска причин текущих эмоциональных и физических проблем."
      />

      <section className="h-[800px] bg-blue-500" id="services">
        <p>EXAMPLE SERVICES</p>
      </section>
      <section className="h-[800px] bg-green-500" id="reviews">
        <p>EXAMPLE REVIEWS</p>
      </section>
    </>
  );
}
