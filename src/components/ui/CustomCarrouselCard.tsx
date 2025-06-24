'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import CustomImage from './CustomImage';

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

interface ImageTextCarouselProps {
  index: number;
  images: { name: string; alt: string }[];
  title: string;
  description: string[];
}

export default function ImageTextCarousel({
  index,
  images,
  title,
  description,
}: ImageTextCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isFullscreen) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [images.length, isFullscreen]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <motion.div
        className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        custom={index}
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Imagen con flechas */}
        <div className="relative mb-4">
          <div
            className="flex justify-center cursor-zoom-in"
            onClick={() => setIsFullscreen(true)}
          >
            <CustomImage
              name={images[current].name}
              alt={images[current].alt}
              height={220}
              className="rounded-md max-h-40 object-contain transition duration-500 ease-in-out"
            />
          </div>

          {/* Flechas */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
              >
                <FaChevronLeft className="text-gray-800" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
              >
                <FaChevronRight className="text-gray-800" />
              </button>
            </>
          )}

          {/* Puntos */}
          {images.length > 1 && (
            <div className="flex justify-center mt-2 space-x-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === current ? 'bg-blue-600' : 'bg-gray-300'
                  } transition-all`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Título */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 text-center">
          {title}
        </h3>

        {/* Descripción */}
        {description.map((paragraph, i) => (
          <p
            key={i}
            className="text-gray-700 whitespace-pre-line text-sm sm:text-base mb-2 text-center"
          >
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Cerrar */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Flechas en fullscreen */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Imagen en grande */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={() => setIsFullscreen(false)}
            >
              <CustomImage
                name={images[current].name}
                alt={images[current].alt}
                height={600}
                className="w-full object-contain rounded-lg cursor-zoom-out transition duration-300"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
