import React from 'react';

import { Container } from '@/components/ui-kit/Container';
import { SectionTitle } from '@/components/ui-kit/SectionTitle';
import { ServiceCard } from '@/components/ui-kit/ServiceCard';
import { Button } from '@/components/ui-kit/Button';
import { Ticker } from '@/components/modules/Ticker';

import { fetchServices } from '@/utils/fetchServices';

import txt from '@/data/services.json';

export const Services: React.FC = async () => {
  const {
    title: { firstString, secondString },
    buttonTitle,
    detailsParts,
    buttonUrl,
  } = txt;

  const { allServices: services } = await fetchServices();

  return (
    <section className="section" id="services">
      <Container>
        <SectionTitle
          className="xl:mb-[22px]"
          firstString={firstString}
          secondString={secondString}
          position="right"
        />

        {!!services && (
          <ul className="grid grid-cols-1 gap-8 mb-10 md:mb-8 xl:mb-[50px] md:grid-cols-2 md:gap-y-6 xl:grid-cols-3 xl:gap-x-5 xl:gap-y-[50px]">
            {services.map(({ id, title, description, price, background }) => (
              <li key={id} className="mx-auto">
                <ServiceCard
                  title={title}
                  description={description}
                  price={price}
                  bgUrl={background.default.url}
                  bgUrlRetina={background.retina.url}
                />
              </li>
            ))}
          </ul>
        )}

        <p className="text-ui_light_16 md:text-ui_light_18">
          {detailsParts[0]}
          <span className="text-ui_reg_16 md:text-ui_reg_20">
            {detailsParts[1]}
          </span>
          {detailsParts[2]}
        </p>
      </Container>

      <Ticker className="mb-8 mt-10 md:mt-8 xl:mt-6 xl:mb-10" />
      <Button className="m-auto" url={buttonUrl}>
        {buttonTitle}
      </Button>
    </section>
  );
};
