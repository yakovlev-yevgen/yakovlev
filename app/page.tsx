import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';

import { Container } from '@/components/ui-kit/Container';
import { Form } from '@/components/modules/Form';
import { PrinciplesList } from '@/components/modules/PrinciplesList';
import { ServiceCard } from '@/components/ui-kit/ServiceCard';
import { Ticker } from '@/components/modules/Ticker';
import { Slider } from '@/components/ui-kit/Slider';

export default function Home() {
  return (
    // here below will be all the sections
    <>
      <Hero />
      <About />

      <Ticker />
      <PrinciplesList />
      <ServiceCard
        title="Гипнотерапия"
        priceFiveSessions={100}
        priceOneSession={50}
        imageUrl="https://armyinform.com.ua/wp-content/uploads/2023/12/1-100-e1703144488424.jpg"
        description="Использование гипноза для лечения и облегчения психологических травм, а также поиска причин текущих эмоциональных и физических проблем."
      />

      <section className="h-[800px] bg-red-500" id="about">
        <p>EXAMPLE ABOUT</p>
      </section>
      <section className="h-[800px] bg-blue-500" id="services">
        <p>EXAMPLE SERVICES</p>
      </section>
      <section className="h-[800px] bg-green-500" id="reviews">
        <p>EXAMPLE REVIEWS</p>
        <p className="text-ui_accent_transparent_40 ">SLIDER:</p>
        <Slider className="bg-ui_light">
          <div className="w-40 h-40 bg-blue-600 m-auto"></div>
          <div className="w-40 h-40 bg-red-600 m-auto"></div>
          <div className="w-40 h-40 bg-green-600 m-auto"></div>
        </Slider>
      </section>
      <section className="h-[800px] bg-orange-500" id="contact">
        <p>EXAMPLE FORM</p>
        <Container>
          <Form className="bg-ui_light" />
        </Container>
      </section>
    </>
  );
}
