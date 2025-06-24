'use client';

import { motion } from 'framer-motion';
// import { desarrolloDetails, desarrolloIntro } from './data/desarrollo';
import DesarrolloCard from '@/components/ui/CustomDesarrolloCard';
import { desarrolloDetails, desarrolloIntro } from './data/transformacion';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function TransformacionOverview() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-12 space-y-20 bg-white text-gray-800">
      {/* Intro */}
      <motion.section
        className="text-center max-w-4xl mx-auto space-y-4 px-2"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
          {desarrolloIntro}
        </p>
      </motion.section>

      {/* Cards de desarrollo */}
      <motion.section
        id="desarrollo"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        {desarrolloDetails.map((item, idx) => (
          <DesarrolloCard
            key={idx}
            index={idx}
            image={item.image}
            alt={item.alt}
            paragraphs={item.paragraphs}
            listTitle={item.listTitle}
            listItems={item.listItems} 
          />
        ))}
      </motion.section>
    </div>
  );
}
