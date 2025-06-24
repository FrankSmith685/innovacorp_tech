'use client';

import ImageTextCarousel from '@/components/ui/CustomCarrouselCard';
import { motion } from 'framer-motion';
import { seguridadDetails, seguridadIntro } from './data/seguridad';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function SeguridadOverview() {
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
          {seguridadIntro}
        </p>
      </motion.section>

      {/* Detalles de seguridad */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        {seguridadDetails.map((item, idx) => (
          <ImageTextCarousel
            key={idx}
            index={idx}
            images={item.images}
            title={item.title}
            description={item.description}
          />
        ))}
      </motion.section>
    </div>
  );
}
