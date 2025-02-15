'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Eliška Syrová',
    text: 'S trenérem Kubou budete ve správných rukou. Ideální sport na zlepšení fyzického a psychického zdraví, rovnováhy a socializace.',
    rating: 5,
  },
  {
    name: 'Zdeněk Pekárek',
    text: 'Kdo se chce naučit základy K1 a Thaiboxu, nebo zkusit první zápasové krůčky, mohu vřele doporučit. Trenér Kuba je zapálený mladík s pedagogickým talentem. Vysvětlí, ukáže. Mohu vřele doporučit.',
    rating: 5,
  },
  {
    name: 'Jana Novotná',
    text: 'Skvělý trenér, který opravdu ví, co dělá. Velmi doporučuji každému, kdo se chce zlepšit.',
    rating: 4,
  },
  {
    name: 'Petr Malý',
    text: 'Profesionální přístup a skvělá atmosféra na trénincích. Rozhodně doporučuji!',
    rating: 5,
  },
  {
    name: 'Lucie Králová',
    text: 'Individuální přístup a skvělá motivace. Děkuji za vše!',
    rating: 5,
  },
  {
    name: 'Michal Dvořák',
    text: 'Perfektní trenér a super kolektiv. Doporučuji všem, kteří chtějí zlepšit svou kondici.',
    rating: 4,
  },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
  ];

  return (
    <div className='relative w-full max-w-4xl mx-auto overflow-hidden'>
      <h2 className='text-center text-3xl font-bold text-white mb-6'>RECENZE</h2>
      <div className='relative flex justify-center w-full h-48'>
        <AnimatePresence mode='sync'>
          {visibleReviews.map((review, i) => (
            <motion.div
              key={review.name}
              className='absolute w-1/2 px-2'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{ left: `${i * 50}%` }}
            >
              <Card className='bg-black/80 text-white p-6 rounded-xl border border-white/10'>
                <CardContent>
                  <div className='flex mb-2'>
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className='text-purple-400 w-5 h-5' />
                    ))}
                  </div>
                  <p className='text-sm'>{review.text}</p>
                  <p className='mt-3 font-bold'>{review.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
    