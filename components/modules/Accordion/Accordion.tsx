'use client';

import { useState, useRef, useEffect, FC } from 'react';
import cn from 'classnames';
import { ICONS } from '@/components/ui-kit/Icons';

type AccordionItem = {
  id: string;
  title: string;
  description: string[];
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export const Accordion: FC<AccordionProps> = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const itemRef = useRef<null | HTMLUListElement>(null);

  const onTitleClick = (index: number) => {
    if (index === activeIndex) return;

    if (index !== activeIndex) {
      setActiveIndex(index);
    }

    const title = itemRef?.current?.children[index];
    const initialTopOffset = title?.getBoundingClientRect().top;
    let startTime: number;

    function scrollToTopAnimation(currentTime: number) {
      if (!startTime) startTime = currentTime;

      let elapsedTime = currentTime - startTime;

      if (elapsedTime <= 250) {
        /* 250ms transition*/
        const currentTopOffset = title?.getBoundingClientRect().top;
        let offset: number;
        if (currentTopOffset && initialTopOffset) {
          offset = currentTopOffset - initialTopOffset;
          scrollBy(0, offset);
        }
        requestAnimationFrame(scrollToTopAnimation);
      }
    }

    if (index > activeIndex) {
      requestAnimationFrame(scrollToTopAnimation);
    }
  };

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [setWidth]);

  useEffect(() => {
    const subItemRefs =
      itemRef?.current?.querySelectorAll<HTMLDivElement>('.itemContent');

    if (subItemRefs) {
      subItemRefs.forEach((subItemRef, idx) => {
        if (activeIndex === idx) {
          subItemRef.style.maxHeight = subItemRef.scrollHeight + 'px';
        } else {
          subItemRef.style.maxHeight = '0';
        }
      });
    }
  }, [activeIndex, width]);

  return (
    <ul
      className={cn(
        'flex flex-col gap-4 font-ui_roboto text-ui_dark',
        className,
      )}
      ref={itemRef}
    >
      {items.map(({ id, title, description }, index) => {
        const isActive = index === activeIndex;

        return (
          <li key={id} className="w-full">
            <button
              className={cn(
                'min-h-[50px] md:min-h-[60px] w-full px-4 md:px-10 py-2 flex items-center justify-between bg-ui_accent_transparent_30 rounded-2xl transition-all duration-250',
                {
                  'bg-ui_accent_transparent_50 rounded-bl-none rounded-br-none':
                    isActive,
                },
              )}
              type="button"
              onClick={() => onTitleClick(index)}
            >
              <span className="text-ui_reg_16 md:text-ui_reg_20">{title}</span>
              {isActive && <ICONS.MINUS className="w-4" />}
              {!isActive && <ICONS.PLUS className="w-4" />}
            </button>

            <div
              className={cn(
                'itemContent box-content overflow-hidden  bg-ui_light transition-[max-height] duration-250',
                {
                  'p-4 border-l border-r border-b border-ui_accent_transparent_30 rounded-bl-2xl rounded-br-2xl':
                    isActive,
                },
              )}
            >
              {description.map(string => (
                <p
                  key={string}
                  className="mb-2 last:mb-0 text-ui_light_14 md:text-ui_light_16 whitespace-break-spaces"
                >
                  {string}
                </p>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
