import React from 'react';
import Image from 'next/image';

import { Container } from '@/components/ui-kit/Container';
import { SectionTitle } from '@/components/ui-kit/SectionTitle';
import { Button } from '@/components/ui-kit/Button';
import { ReviewsSlider } from '@/components/modules/ReviewsSlider';
import { QuoteBlock } from '@/components/ui-kit/QuoteBlock';

import reviews from 'data/reviews.json';

export const Reviews: React.FC = () => {
  const {
    title: { firstString, secondString },
    reviews: reviewsArray,
    image: { src, alt },
    buttonText,
  } = reviews;

  return (
    <section className="reviews section overflow-hidden">
      <Container className="!relative">
        <SectionTitle
          firstString={firstString}
          secondString={secondString}
          position="left"
          className="smOnly:h-[130px] mdOnly:h-[175px] mb-[318px] md:mb-[596px] xl:mb-[1040px]"
        />

        <div className="absolute w-full smOnly:max-w-[480px] mdOnly:max-w-[768px] xl:w-[1440px] smOnly:!h-[250px] mdOnly:!h-[512px] xl:!h-[960px] smOnly:!top-[158px] md:!top-[227px] xl:!top-[328px] !left-1/2 -translate-x-1/2">
          <Image fill src={src} alt={alt} className="w-full object-cover" />
        </div>

        <QuoteBlock
          content={reviewsArray[0]}
          quotesPosition="left"
          className="quoteBlockFirst md:w-[290px] md:top-[272px] md:left-[23px] xl:top-[428px] xl:left-[20px] xxl:left-[100px]"
        />
        <QuoteBlock
          content={reviewsArray[1]}
          quotesPosition="right"
          className="quoteBlockSecond md:w-[260px] md:top-[317px] xl:top-[628px] md:right-[32px] xxl:right-[100px]"
        />

        <ReviewsSlider />
        <Button url="https://t.me/EvgeniyYChannel" className="block mx-auto">
          {buttonText}
        </Button>
      </Container>
    </section>
  );
};
