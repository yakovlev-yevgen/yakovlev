import React from 'react';
import Image from 'next/image';

import { SectionTitle } from '@/components/ui-kit/SectionTitle';
import { Container } from '@/components/ui-kit/Container';
import { Form } from '@/components/modules/Form';

import feedback from 'data/feedback.json';

export const Feedback: React.FC = () => {
  const {
    title: { firstString, secondString },
    imageAlt,
    imageSrc,
  } = feedback;

  return (
    <section
      className="section !pb-20 md:!pb-[100px] xl:!pb-[120px]"
      id="contact"
    >
      <Container>
        <SectionTitle
          firstString={firstString}
          secondString={secondString}
          position="right"
        />

        <div className="xl:grid xl:grid-cols-[505px_505px] xl:gap-x-[125px] xl:ml-auto xl:w-fit">
          <Form className="md:w-[505px] md:mx-auto" />

          <div className="smOnly:max-w-[440px] notXl:mx-auto md:w-[505px] md:h-[737px] rounded-2xl overflow-hidden">
            <Image src={imageSrc} alt={imageAlt} width={505} height={737} />
          </div>
        </div>
      </Container>
    </section>
  );
};
