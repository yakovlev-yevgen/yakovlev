import React from 'react';

import { Container } from '@/components/ui-kit/Container';
import { Values } from '@/components/modules/Values';
import { SectionTitle } from '@/components/ui-kit/SectionTitle';
import { Requests } from '@/components/modules/Requests';
import { Principles } from '@/components/modules/Principles';

import about from 'data/about.json';

export const About: React.FC = () => {
  const {
    title: { firstString, secondString },
  } = about;

  return (
    <section className="section bg-ui_light" id="about">
      <Container>
        <SectionTitle
          firstString={firstString}
          secondString={secondString}
          position="left"
          className="!mb-10 xl:!mb-20"
        />

        <Values />

        <Principles />

        <Requests />
      </Container>
    </section>
  );
};
