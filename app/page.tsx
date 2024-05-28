'use client';

import { useState } from 'react';

import { NavBar } from '@/components/modules/NavBar';
import { Button } from '@/components/ui-kit/Button';
import { Container } from '@/components/ui-kit/Container';
import { Logo } from '@/components/ui-kit/Logo';
import { SectionTitle } from '@/components/ui-kit/SectionTitle';
import { Socials } from '@/components/modules/Socials';
import { Contact } from '@/components/ui-kit/Contact';
import { FormModal } from '@/components/modules/FormModal';
import { Form } from '@/components/modules/Form';
import { Accordion } from '@/components/modules/Accordion';
import { ServiceCard } from '@/components/ui-kit/ServiceCard';

import common from '@/data/common.json';
import feedbackForm from '@/data/feedbackForm.json';
import faq from '@/data/faq.json';

export default function Home() {
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalFailedOpen, setIsModalFailedOpen] = useState(false);

  console.log(isModalFailedOpen);

  return (
    // here below will be all the sections
    <>
      <ServiceCard
        title="Гипнотерапия"
        priceFiveSessions={100}
        priceOneSession={50}
        imageUrl="https://armyinform.com.ua/wp-content/uploads/2023/12/1-100-e1703144488424.jpg"
        description="Использование гипноза для лечения и облегчения психологических травм, а также поиска причин текущих эмоциональных и физических проблем."
      />

      <section className="section bg-ui_dark">
        <Container>
          <Button>Записаться на консультацию</Button>
          <h1 className="text-ui_light_16">
            Це секція приклад Roboto 16px 300
          </h1>
          <h1 className="font-ui_kurier text-ui_bold_20">
            It is an example section 20px 700 Kurier
          </h1>
          <h1 className="font-ui_kurier text-ui_reg_20">
            Це секція приклад 20px 400 Kurier
          </h1>

          <SectionTitle
            firstString="Подход"
            secondString="к работе"
            position="left"
          />
          <SectionTitle
            firstString="Услуги"
            secondString="и цены"
            position="right"
          />
          <SectionTitle
            firstString="Клиенты"
            secondString="обо мне"
            position="left"
          />
          <SectionTitle
            firstString="Форма"
            secondString="для связи"
            position="right"
          />

          <Logo />
          <p className="text-ui_accent_transparent_40">MENU SOCIALS:</p>
          <Socials section="menu" />
          <p className="text-ui_accent_transparent_40">HERO SOCIALS:</p>
          <Socials section="hero" />
          <p className="text-ui_accent_transparent_40">FOOTER SOCIALS:</p>
          <Socials section="footer" />

          <p className="text-ui_accent_transparent_40">MENU NavBar:</p>
          <NavBar section="menu" />
          <p className="text-ui_accent_transparent_40">HEADER NavBar:</p>
          <NavBar section="header" />
          <p className="text-ui_accent_transparent_40">FOOTER NavBar:</p>
          <NavBar section="footer" />
          <p className="text-ui_accent_transparent_40">CONTACT:</p>
          <Contact phoneNumber={common.contacts.phoneNumber} />
          <p className="text-ui_accent_transparent_40 ">ACCORDION:</p>
          <Accordion className="p-4 bg-ui_light" items={faq} />
        </Container>
      </section>
      <section className="h-[800px] bg-red-500" id="about">
        <p>EXAMPLE ABOUT</p>
      </section>
      <section className="h-[800px] bg-blue-500" id="services">
        <p>EXAMPLE SERVICES</p>
      </section>
      <section className="h-[800px] bg-green-500" id="reviews">
        <p>EXAMPLE REVIEWS</p>
      </section>
      <section className="h-[800px] bg-orange-500" id="contact">
        <p>EXAMPLE FORM</p>
        <Container>
          <Form className="bg-ui_light" />
        </Container>
      </section>

      <Button type="button" handleClick={() => setIsModalSuccessOpen(true)}>
        Відкрити модалку успіху
      </Button>
      <Button type="button" handleClick={() => setIsModalFailedOpen(true)}>
        Відкрити модалку невдачі
      </Button>

      <FormModal
        isModalOpen={isModalSuccessOpen}
        closeModal={() => setIsModalSuccessOpen(false)}
        title={feedbackForm.successModal.title}
        details={feedbackForm.successModal.details}
      />

      <FormModal
        isModalOpen={isModalFailedOpen}
        closeModal={() => setIsModalFailedOpen(false)}
        title={feedbackForm.failedModal.title}
        details={feedbackForm.failedModal.details}
      />
    </>
  );
}
