'use client';

import { motion } from 'framer-motion';
import CustomImage from './CustomImage';
import { FaCheckCircle } from 'react-icons/fa';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    } as const,
  }),
};

interface DesarrolloCardProps {
  index: number;
  image: string;
  alt: string;
  paragraphs: string[];
  listTitle?: string;
  listItems?: string[];
}

export default function DesarrolloCard({
  index,
  image,
  alt,
  paragraphs,
  listTitle,
  listItems,
}: DesarrolloCardProps) {
  return (
    <motion.div
      className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
      custom={index}
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Imagen */}
      <div className="flex justify-center mb-4">
        <CustomImage
          name={image}
          alt={alt}
          height={220}
          className="rounded-md max-h-40 object-contain"
        />
      </div>

      {/* Párrafos */}
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className="text-gray-700 whitespace-pre-line text-sm sm:text-base mb-3"
        >
          {paragraph}
        </p>
      ))}

      {/* Título de la lista */}
      {listTitle && (
        <h4 className="text-base sm:text-lg font-semibold text-blue-700 mb-2 flex items-center gap-2">
          <FaCheckCircle className="text-blue-500" />
          {listTitle}
        </h4>
      )}

      {/* Lista */}
      {listItems && (
        <ul className="space-y-2 pl-2">
          {listItems.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
            >
              <FaCheckCircle className="text-green-500 mt-[2px]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
