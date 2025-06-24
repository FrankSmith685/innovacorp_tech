'use client';

import { motion } from 'framer-motion';
import CustomImageCard from '../ui/CustomImageCard';
import { proyectoDetails, proyectoIntro } from './data/proyecto';
import CustomButton from '../ui/CustomButton';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function ProyectoOverview() {
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
          {proyectoIntro}
        </p>

        <CustomButton
          variantType="indigo"
          onClick={() => window.open('https://mappi.pe', '_blank', 'noopener,noreferrer')}
          className="self-center md:self-start !w-auto !rounded-2xl"
        >
          Visita el sitio web de Mappi
        </CustomButton>


      </motion.section>


      {/* Detalles de seguridad */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        {proyectoDetails.map((item, idx) => (
          <CustomImageCard
            key={idx}
            index={idx}
            image={item.image}
            alt={item.alt}
          />
        ))}

      </motion.section>
    </div>
  );
}
