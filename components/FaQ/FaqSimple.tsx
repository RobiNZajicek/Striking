'use client';

import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Container, Title } from '@mantine/core';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './FaqSimple.module.css'
export function FaqSimple() {
  const [opened, setOpened] = useState<string | null>(null);

  return (
    <Container size="md" className='relative'>
      {/* Nadpis sekce */}
      <Title ta="center" className="font-black text-4xl md:text-5xl text-primary mb-8">
        CASTÉ DOTAZY
      </Title>
     
        <div className={classes.FaqRight}></div>

      {/* FAQ Accordion */}
      <Accordion
        variant="separated"
        className="w-full max-w-4xl mx-auto rounded-lg shadow-lg p-4 space-y-6"
        transitionDuration={300} // Plynulejší animace
      >
        {[
          {
            value: 'reset-password',
            question: 'Co si mám vzít na první hodinu a co mám očekávat?',
            answer:
              'Na první hodinu si vezměte láhev s vodou, ručník a sportovní oblečení. Cvičíme bez bot. Ničeho se nebojte, přijďte, vše Vám vysvětlíme a případně půjčíme. Zkušenosti nemusíte mít žádné. Pokud se na první hodinu zaregistrujete, je tato první lekce pro Vás zdarma.',
          },
          {
            value: 'another-account',
            question: 'Berete multisport kartu?',
            answer: 'Multisport karty přijímáme!',
          },
          {
            value: 'newsletter',
            question: 'Jaký trénink si mám vybrat?',
            answer:
              'Vyberte si trénink, který Vám vyhovuje časově a zaměřením v sekci "Rozvrh". Na všech trénincích spálíte mnoho kalorií, naučíte se techniku, pohyb, a ke všemu se stanete součástí fajn komunity.',
          },
          {
            value: 'credit-card',
            question: 'Nechci kontakt (údery vedené proti vám na tělo/hlavu), je to u vás možné?',
            answer:
              'Ano. Nikdo nikoho nebude nutit do žádného kontaktu. Kombinace se většinou nacvičují na lapách. Sparring je u nás dobrovolný, kdo se ho nechce účastnit, trenér má vždy připraveny vedlejší aktivity.',
          },
          {
            value: 'payment',
            question: 'Jaký typ členství si mám vybrat?',
            answer:
              'V sekci „Ceník“ lze objevit námi nabízená členství. Pokud si stále nevíte rady, neváhejte se nám ozvat na naši emailovou adresu prague.striking.academy@gmail.com, kde Vám rádi poradíme s výběrem a možnostmi členství.',
          },
        ].map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border border-primary rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden"
            onClick={() => setOpened(opened === item.value ? null : item.value)}
          >
            <AccordionControl className="flex items-center  w-full px-6 py-4 text-lg font-semibold hover:text-primary transition-all">
              <div className="flex items-center space-x-2">
                {/* Arrow Icon next to the text, NOT above it */}
                <IconChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    opened === item.value ? 'rotate-180' : ''
                  }`}
                />
                <span className="flex-1">{item.question}</span>
              </div>
            </AccordionControl>
            <AccordionPanel className="text-white text-base leading-relaxed px-6 pb-4">
              {item.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
